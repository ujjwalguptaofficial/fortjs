import * as http from "http";
import * as url from 'url';
import { Controller, Wall } from "../abstracts";
import { FORT_GLOBAL } from "../constants/fort_global";
import { parseAndMatchRoute, promise, reverseLoop } from "../helpers";
import { GenericGuard } from "../generics";
import { HttpFormatResult, HttpResult, RouteMatch } from "../types";
import { HTTP_METHOD } from "../enums";
import { InjectorHandler } from "./injector_handler";
import { IException } from "../interfaces";
import { promiseResolve } from "../utils";
import { ControllerResultHandler } from "./controller_result_handler";


export class RequestHandler extends ControllerResultHandler {

    private routeMatchInfo_: RouteMatch;
    private wallInstances: Wall[] = [];


    private registerEvents_() {
        this.request.on('error', (err) => {
            this.onBadRequest(err).catch(ex => {
                this.onErrorOccured(ex);
            });
        });
        this.response.on('error', this.onErrorOccured.bind(this));
    }

    private executeWallIncoming_(): Promise<HttpResult | HttpFormatResult> {
        return promise((res, rej) => {
            let index = 0;
            const wallLength = FORT_GLOBAL.walls.length;
            const executeWallIncomingByIndex = () => {
                if (wallLength > index) {
                    const wall = FORT_GLOBAL.walls[index++];
                    const constructorArgsValues = InjectorHandler.getConstructorValues(wall.name);
                    const wallObj = new wall(...constructorArgsValues);
                    wallObj['componentProp_'] = this.componentProps;
                    this.wallInstances.push(wallObj);

                    const methodArgsValues = InjectorHandler.getMethodValues(wall.name, 'onIncoming', wallObj);
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

    runController_;

    private executeShieldsProtection_(): Promise<() => void> {
        return promise((res, rej) => {
            let index = 0;
            const shields = FORT_GLOBAL.shields.concat(this.routeMatchInfo_.shields);
            const shieldLength = shields.length;
            const executeShieldByIndex = () => {
                if (shieldLength > index) {
                    const shield = shields[index++];
                    const constructorArgsValues = InjectorHandler.getConstructorValues(shield.name);
                    const shieldObj = new shield(...constructorArgsValues);
                    shieldObj['componentProp_'] = this.componentProps;

                    const methodArgsValues = InjectorHandler.getMethodValues(shield.name, 'protect', shieldObj);

                    return shieldObj.protect(...methodArgsValues).then(result => {
                        result == null ? executeShieldByIndex() : res(this.onResultFromComponent(result));
                    }).catch(rej);
                }
                else {
                    res(null);
                }
            };
            executeShieldByIndex();
        });
    }

    private executeGuardsCheck_(guards: Array<typeof GenericGuard>): Promise<() => void> {
        return promise((res, rej) => {
            let index = 0;
            const shieldLength = guards.length;
            const executeGuardByIndex = () => {
                if (shieldLength > index) {
                    const guard = guards[index++];
                    const constructorArgsValues = InjectorHandler.getConstructorValues(guard.name);
                    const guardObj = new guard(...constructorArgsValues);
                    guardObj['componentProp_'] = this.componentProps;

                    const methodArgsValues = InjectorHandler.getMethodValues(guard.name, 'check', guardObj);
                    guardObj.check(...methodArgsValues).then(result => {
                        result == null ? executeGuardByIndex() : res(this.onResultFromComponent(result));
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
        response.setHeader('X-Powered-By', FORT_GLOBAL.appName);
        response.setHeader('Vary', 'Accept-Encoding');
        response.sendDate = true;
    }

    private async onRouteMatched_() {
        const workerInfo = this.routeMatchInfo_.workerInfo;
        this.componentProps.param = this.routeMatchInfo_.params;
        this.componentProps.controllerName = this.routeMatchInfo_.controllerName;
        if (workerInfo == null) {
            return () => {
                return this.request.method === HTTP_METHOD.Options ?
                    this.onRequestOptions(this.routeMatchInfo_.allowedHttpMethod) :
                    this.onMethodNotAllowed(this.routeMatchInfo_.allowedHttpMethod);
            }
        }
        else {
            this.componentProps.workerName = this.routeMatchInfo_.workerInfo.workerName;
            const shieldResult = await this.executeShieldsProtection_();
            if (shieldResult) return shieldResult;

            const guardResult = await this.executeGuardsCheck_(
                FORT_GLOBAL.guards.concat(workerInfo.guards)
            );
            if (guardResult) return guardResult;

            return this.runController_();
        }
    }

    private runWallOutgoing_() {
        // check if only Cookie wall has been injected
        if (this.wallInstances.length === 1) {
            return promiseResolve(null);
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
        this.componentProps.query = urlDetail.query;
        try {
            const wallResult = await this.executeWallIncoming_();
            if (wallResult) {
                await this.onTerminationFromWall(wallResult);
                return;
            }
            const pathUrl = urlDetail.pathname;
            const requestMethod = request.method as HTTP_METHOD;

            this.routeMatchInfo_ = parseAndMatchRoute(pathUrl, requestMethod);
            const finalCallback = await (
                this.routeMatchInfo_ == null ? () => {
                    return this.handleFileRequest(pathUrl);
                } :
                    this.onRouteMatched_()
            );
            await this.runWallOutgoing_();
            // if (finalCallback) {
            await finalCallback();
            // }
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
            global: FORT_GLOBAL
        } as any;
        this.registerEvents_();
        this.setPreHeader_();
        this.execute_();
    }

    setControllerProps_() {
        const controllerName = this.routeMatchInfo_.controller.name;
        const constructorValues = InjectorHandler.getConstructorValues(controllerName);
        const controllerObj: Controller = new this.routeMatchInfo_.controller(...constructorValues);

        controllerObj['componentProp_'] = this.componentProps;
        const workerName = this.routeMatchInfo_.workerInfo.workerName;
        const methodArgsValues = InjectorHandler.getMethodValues(controllerName, workerName, controllerObj);
        return controllerObj[workerName](...methodArgsValues);
    }
}
if (FORT_GLOBAL.isProduction) {
    RequestHandler.prototype.runController_ = function (this: RequestHandler) {
        return this.setControllerProps_().then(
            this.onResultFromComponent.bind(this)
        );
    };
}
else {
    RequestHandler.prototype.runController_ = function (this: RequestHandler) {
        const result = this.setControllerProps_();
        if (Promise.resolve(result) !== result) {
            return Promise.reject({
                message: "Wrong implementation - worker does not return promise"
            } as IException);
        }
        else {
            return result.then(
                this.onResultFromComponent.bind(this)
            );
        }
    };
}