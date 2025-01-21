import * as http from "http";
import * as url from 'url';
import { Controller, Wall } from "../abstracts";
import { parseAndMatchRoute, promise, reverseLoop, textResult } from "../helpers";
import { TComponentQuery, TGuard } from "../types";
import { HTTP_METHOD } from "../enums";
import { InjectorHandler } from "./injector_handler";
import { IHttpResult, IRouteMatch } from "../interfaces";
import { FileHandler } from "./file_handler";
import { RequestHandlerHelper } from "./request_handler_helper";
import { ON_INCOMING } from "../constants";

export class RequestHandler extends RequestHandlerHelper {

    private routeMatchInfo_: IRouteMatch;
    private wallInstances: Wall[] = [];

    private registerEvents_() {
        this.request.on('error', (err) => {
            const errorArgs = [`Unexpected error occured`, err];
            console.error(...errorArgs);
            this.config.logger.error(...errorArgs);
            this.onBadRequest(err).catch(ex => {
                this.onErrorOccured(ex);
            });
        });
        this.response.on('error', this.onErrorOccured.bind(this));
    }

    private executeWallIncoming_(): Promise<IHttpResult> {
        const walls = this.config.walls;
        const wallLength = walls.length;
        if (wallLength === 0) return;
        return promise((res, rej) => {
            let index = 0;
            const executeWallIncomingByIndex = () => {
                if (wallLength > index) {
                    const wall = walls[index++];
                    const constructorArgsValues = InjectorHandler.getConstructorValues(wall.name);
                    const wallObj = new wall(...constructorArgsValues);
                    wallObj['componentProp_'] = this.componentProps;
                    this.wallInstances.push(wallObj);

                    const methodArgsValues = InjectorHandler.getMethodValues(wall.name, ON_INCOMING, wallObj);
                    wallObj.onIncoming(...methodArgsValues).then(result => {
                        result == null ? executeWallIncomingByIndex() : res(result);
                    }).catch(rej);
                }
                else {
                    res(null);
                }
            };
            executeWallIncomingByIndex();
        });
    }

    async runController_() {
        const result = await this.executeController();
        return this.onResultFromComponent(result);
    }

    private executeShieldsProtection_(): Promise<() => void> {
        const shields = this.routeMatchInfo_.shields;
        const shieldLength = shields.length;
        if (shieldLength === 0) return;
        return promise((res, rej) => {
            let index = 0;
            const executeShieldByIndex = () => {
                if (shieldLength > index) {
                    const shield = shields[index++];
                    const constructorArgsValues = InjectorHandler.getConstructorValues(shield.name);
                    const shieldObj = new shield(...constructorArgsValues);
                    shieldObj['componentProp_'] = this.componentProps;

                    const methodArgsValues = InjectorHandler.getMethodValues(shield.name, 'protect', shieldObj);

                    return shieldObj.protect(...methodArgsValues).then(result => {
                        result == null ? executeShieldByIndex() : res(this.onResultFromComponent(result as IHttpResult));
                    }).catch(rej);
                }
                else {
                    res(null);
                }
            };
            executeShieldByIndex();
        });
    }

    private executeGuardsCheck_(guards: Array<TGuard>): Promise<() => void> {
        const guardLength = guards.length;
        if (guardLength === 0) return;
        return promise((res, rej) => {
            let index = 0;
            const executeGuardByIndex = () => {
                if (guardLength > index) {
                    const guard = guards[index++];
                    const constructorArgsValues = InjectorHandler.getConstructorValues(guard.name);
                    const guardObj = new guard(...constructorArgsValues);
                    guardObj['componentProp_'] = this.componentProps;

                    const methodArgsValues = InjectorHandler.getMethodValues(guard.name, 'check', guardObj);
                    guardObj.check(...methodArgsValues).then(result => {
                        result == null ? executeGuardByIndex() : res(this.onResultFromComponent(result as IHttpResult));
                    }).catch(rej);
                }
                else {
                    res(null);
                }
            };
            executeGuardByIndex();
        });
    }

    private setPreHeader_() {
        const response = this.response;
        response.setHeader('X-Powered-By', this.config.appName);
        response.setHeader('Vary', 'Accept-Encoding');
        response.sendDate = true;
    }

    private async onRouteMatched_() {
        const routeMatchInfo = this.routeMatchInfo_;
        const workerInfo = routeMatchInfo.workerInfo;
        if (workerInfo == null) {
            return () => {
                switch (this.request.method) {
                    case HTTP_METHOD.Options:
                        return this.onRequestOptions(routeMatchInfo.allowedHttpMethod);
                }
                return this.onMethodNotAllowed(routeMatchInfo.allowedHttpMethod);
            }
        }

        const componentProps = this.componentProps;

        componentProps.param = routeMatchInfo.params;
        componentProps.controllerName = routeMatchInfo.controllerName;
        componentProps.workerInfo = workerInfo;

        const shieldResult = await this.executeShieldsProtection_();
        if (shieldResult) return shieldResult;
        const guardResult = await this.executeGuardsCheck_(
            workerInfo.guards
        );
        if (guardResult) return guardResult;

        return this.runController_();
    }

    private runWallOutgoing_() {
        // check if only Cookie wall has been injected
        if (this.wallInstances.length === 0) {
            return;
        }
        const outgoingResults: Array<Promise<void>> = [];
        reverseLoop(this.wallInstances, (wallInstance: Wall) => {
            const methodArgsValues = InjectorHandler.getMethodValues(wallInstance.constructor.name, 'onOutgoing', wallInstance);
            methodArgsValues.shift();
            outgoingResults.push(wallInstance.onOutgoing(this.controllerResult, ...methodArgsValues) as any);
        });
        return Promise.all(outgoingResults);
    }

    private async execute_() {
        const request = this.componentProps.request;
        const urlDetail = url.parse(request.url, true);
        this.componentProps.query = urlDetail.query as TComponentQuery;
        try {
            const wallResult = await this.executeWallIncoming_();
            if (wallResult) {
                this.controllerResult = wallResult;
                return this.handleFinalResult_();
            }
            const pathUrl = urlDetail.pathname;
            this.routeMatchInfo_ = parseAndMatchRoute(pathUrl, request.method as HTTP_METHOD);
            const onNotRouteMatched = async () => {
                const fileHandler = new FileHandler(this);
                const fileResult = await fileHandler.handleFileRequest(pathUrl);
                if (fileResult == null) {
                    return () => {
                        return this.onNotFound();
                    }
                }
                return this.onResultFromComponent(fileResult);
            };
            const finalCallback = await (
                this.routeMatchInfo_ == null ? onNotRouteMatched() :
                    this.onRouteMatched_()
            );
            await this.runWallOutgoing_();
            // using call to pass context, as methods are being returned mostly
            await finalCallback.call(this);
        }
        catch (ex) {
            this.onErrorOccured(ex);
        }
    }

    handle(request: http.IncomingMessage, response: http.ServerResponse) {
        this.componentProps = {
            request,
            response,
            data: {},
            global: this.config
        } as any;
        this.registerEvents_();
        this.setPreHeader_();
        this.execute_();
    }

    executeController() {
        const controller = this.routeMatchInfo_.controller;
        const controllerName = controller.name;
        const constructorValues = InjectorHandler.getConstructorValues(controllerName);
        const controllerObj: Controller = new controller(...constructorValues);

        controllerObj['componentProp_'] = this.componentProps;
        const workerName = this.routeMatchInfo_.workerInfo.workerName;
        const methodArgsValues = InjectorHandler.getMethodValues(controllerName, workerName, controllerObj);
        return controllerObj[workerName](...methodArgsValues);
    }

    onResultFromComponent(result: IHttpResult) {
        this.controllerResult = result || textResult("");
        // return () => {
        return this.handleFinalResult_;
        // }
    }
}
