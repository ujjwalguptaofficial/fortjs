import * as http from "http";
import * as url from 'url';
import { Controller, Wall } from "../abstracts";
import { COOKIE } from "../constants";
import { FortGlobal } from "../constants/fort_global";
import { parseCookie, parseAndMatchRoute, promise, compareExpectedAndRemoveUnnecessary, reverseLoop } from "../helpers";
import { CookieManager, FileManager } from "../models";
import { GenericGuard } from "../generics";
import { RouteMatch } from "../types";
import { HTTP_METHOD } from "../enums";
import { PostHandler } from "./post_handler";
import { InjectorHandler } from "./injector_handler";
import { RouteHandler } from "./route_handler";
import { IException } from "../interfaces";
import { promiseResolve } from "../utils";
import { ControllerResultHandler } from "./controller_result_handler";


export class RequestHandler extends ControllerResultHandler {

    private routeMatchInfo_: RouteMatch;
    private wallInstances: Wall[] = [];

    constructor(request: http.IncomingMessage, response: http.ServerResponse) {
        super();
        this.componentProps = {
            request,
            response,
            data: {}
        } as any;
        this.registerEvents_();
    }

    private registerEvents_() {
        this.request.on('error', (err) => {
            this.onBadRequest(err).catch(ex => {
                this.onErrorOccured(ex);
            });
        });
        this.response.on('error', this.onErrorOccured.bind(this));
    }

    private executeWallIncoming_(): Promise<boolean> {
        return promise((res, rej) => {
            let index = 0;
            const wallLength = FortGlobal.walls.length;
            const executeWallIncomingByIndex = () => {
                if (wallLength > index) {
                    const wall = FortGlobal.walls[index++];
                    const constructorArgsValues = InjectorHandler.getConstructorValues(wall.name);
                    const wallObj = new wall(...constructorArgsValues);
                    wallObj['componentProp_'] = this.componentProps;
                    this.wallInstances.push(wallObj);

                    const methodArgsValues = InjectorHandler.getMethodValues(wall.name, 'onIncoming');
                    wallObj.onIncoming(...methodArgsValues).then(result => {
                        if (result == null) {
                            executeWallIncomingByIndex();
                        }
                        else {
                            res(false);
                            this.onTerminationFromWall(result);
                        }
                    }).catch(rej);
                }
                else {
                    res(true);
                }
            };
            executeWallIncomingByIndex();
        });
    }

    runController_;

    private executeShieldsProtection_(): Promise<() => void> {
        return promise((res, rej) => {
            let index = 0;
            const shieldLength = this.routeMatchInfo_.shields.length;
            const executeShieldByIndex = () => {
                if (shieldLength > index) {
                    const shield = this.routeMatchInfo_.shields[index++];
                    const constructorArgsValues = InjectorHandler.getConstructorValues(shield.name);
                    const shieldObj = new shield(...constructorArgsValues);
                    shieldObj['componentProp_'] = this.componentProps;

                    const methodArgsValues = InjectorHandler.getMethodValues(shield.name, 'protect');

                    return shieldObj.protect(...methodArgsValues).then(result => {
                        if (result == null) {
                            executeShieldByIndex();
                        }
                        else {
                            res(this.onResultFromComponent(result));
                        }
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

                    const methodArgsValues = InjectorHandler.getMethodValues(guard.name, 'check');
                    guardObj.check(...methodArgsValues).then(result => {
                        if (result == null) {
                            executeGuardByIndex();
                        }
                        else {
                            res(this.onResultFromComponent(result));
                        }
                    }).catch(rej);
                }
                else {
                    res(null);
                }
            };
            executeGuardByIndex();
        });
    }

    private parseCookieFromRequest_() {
        if (FortGlobal.shouldParseCookie === true) {
            const { request } = this.componentProps;
            const rawCookie = (request.headers[COOKIE] || request.headers["cookie"]) as string;
            let parsedCookies;
            try {
                parsedCookies = parseCookie(rawCookie);
            } catch (ex) {
                this.onErrorOccured(ex);
                return false;
            }
            const session = new FortGlobal.sessionProvider();
            session.cookie = new CookieManager(parsedCookies);
            session.sessionId = parsedCookies[FortGlobal.appSessionIdentifier];
            this.componentProps.session = session;
            this.componentProps.cookie = session.cookie;
        }
        else {
            this.componentProps.cookie = new CookieManager({});
        }
        return true;
    }

    private setPreHeader_() {
        this.response.setHeader('X-Powered-By', FortGlobal.appName);
        this.response.setHeader('Vary', 'Accept-Encoding');
        this.response.sendDate = true;
    }

    private checkExpectedQuery_() {
        const expectedQuery = RouteHandler.getExpectedQuery(this.routeMatchInfo_.controllerName, this.routeMatchInfo_.workerInfo.workerName);
        if (expectedQuery != null) {
            this.componentProps.query = compareExpectedAndRemoveUnnecessary(expectedQuery, this.componentProps.query, true);
        }
    }

    private checkExpectedBody_() {
        const expectedBody = RouteHandler.getExpectedBody(this.routeMatchInfo_.controllerName, this.routeMatchInfo_.workerInfo.workerName);
        if (expectedBody != null) {
            this.componentProps.body = compareExpectedAndRemoveUnnecessary(expectedBody, this.componentProps.body, false);
        }
    }

    private onRouteMatched_() {
        const actionInfo = this.routeMatchInfo_.workerInfo;
        this.componentProps.param = this.routeMatchInfo_.params;
        if (actionInfo == null) {
            return () => {
                return this.request.method === HTTP_METHOD.Options ?
                    this.onRequestOptions(this.routeMatchInfo_.allowedHttpMethod) :
                    this.onMethodNotAllowed(this.routeMatchInfo_.allowedHttpMethod);
            }
        }
        else {
            this.checkExpectedQuery_();
            if (this.componentProps.query == null) {
                return this.onBadRequest({
                    message: "Bad query string data - query string data does not match with expected value"
                } as IException);
            }
            this.componentProps.workerName = this.routeMatchInfo_.workerInfo.workerName;
            return this.executeShieldsProtection_().then(shieldResult => {
                if (shieldResult) return shieldResult;
                return this.handlePostData().catch(ex => {
                    return () => {
                        return this.onBadRequest(ex);
                    }
                })
            }).then(shieldResult => {
                if (shieldResult) return shieldResult;
                this.checkExpectedBody_();
                if (this.componentProps.body == null) {
                    return () => {
                        this.onBadRequest({
                            message: "Bad body data - body data does not match with expected value"
                        } as IException);
                    }
                }
                return this.executeGuardsCheck_(actionInfo.guards);
            }).then(guardResult => {
                if (guardResult) return guardResult;
                return this.runController_();
            });
        }
    }

    private runWallOutgoing_() {
        const outgoingResults: Array<Promise<any>> = [];
        reverseLoop(this.wallInstances, (value: Wall) => {
            const methodArgsValues = InjectorHandler.getMethodValues(value.constructor.name, 'onOutgoing');
            methodArgsValues.shift();
            outgoingResults.push(value.onOutgoing(this.controllerResult, ...methodArgsValues));
        });
        return Promise.all(outgoingResults);
    }

    private execute_() {
        const request = this.componentProps.request;
        const urlDetail = url.parse(request.url, true);
        this.componentProps.query = urlDetail.query;
        const isCookieValid = this.parseCookieFromRequest_();
        if (isCookieValid === false) return;
        this.executeWallIncoming_().then(isAllowedByWalls => {
            if (isAllowedByWalls === false) return;
            const pathUrl = urlDetail.pathname;
            const requestMethod = request.method as HTTP_METHOD;

            this.routeMatchInfo_ = parseAndMatchRoute(pathUrl.toLowerCase(), requestMethod);
            return this.routeMatchInfo_ == null ? () => {
                return this.handleFileRequest(pathUrl);
            } :
                this.onRouteMatched_();
        }).then(finalCallback => {
            if (finalCallback) {
                return this.runWallOutgoing_().then(finalCallback);
            }
        }).catch(ex => {
            this.onErrorOccured(ex);
        })

    }

    handlePostData() {
        if (this.request.method === HTTP_METHOD.Get) {
            this.componentProps.body = {};
            this.componentProps.file = new FileManager({});
            return promiseResolve(null);
        }

        if (FortGlobal.shouldParsePost === true) {
            const postHandler = new PostHandler(
                this.request
            );
            return postHandler.parsePostData().then(postResult => {
                this.componentProps.file = postResult[0];
                this.componentProps.body = postResult[1];
            });
        }
    }

    handle() {
        this.setPreHeader_();
        this.execute_();
    }

    setControllerProps_() {
        const constructorValues = InjectorHandler.getConstructorValues(this.routeMatchInfo_.controller.name);
        const controllerObj: Controller = new this.routeMatchInfo_.controller(...constructorValues);

        controllerObj['componentProp_'] = this.componentProps;

        const methodArgsValues = InjectorHandler.getMethodValues(this.routeMatchInfo_.controller.name, this.routeMatchInfo_.workerInfo.workerName);
        return controllerObj[this.routeMatchInfo_.workerInfo.workerName](...methodArgsValues);
    }
}
if (FortGlobal.isProduction) {
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