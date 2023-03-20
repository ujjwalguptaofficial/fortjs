import * as http from "http";
import * as url from 'url';
import { Controller } from "../abstracts";
import { __Cookie } from "../constant";
import { FortGlobal } from "../fort_global";
import { parseCookie, parseAndMatchRoute, promise, compareExpectedAndRemoveUnnecessary } from "../helpers";
import { CookieManager, FileManager } from "../models";
import { GenericSessionProvider, GenericGuard } from "../generics";
import { RouteMatch, HttpRequest, HttpResponse } from "../types";
import { HTTP_METHOD } from "../enums";
import { PostHandler } from "./post_handler";
import { InjectorHandler } from "./injector_handler";
import { RouteHandler } from "./route_handler";
import { IException } from "../interfaces";
import { promiseResolve } from "../utils";


export class RequestHandler extends PostHandler {

    private session_: GenericSessionProvider;
    private query_: any;
    private data_ = {};
    private routeMatchInfo_: RouteMatch;


    constructor(request: http.IncomingMessage, response: http.ServerResponse) {
        super();
        this.request = request;
        this.response = response;
        this.registerEvents_();
    }

    private registerEvents_() {
        this.request.on('error', this.onBadRequest.bind(this));
        this.response.on('error', this.onErrorOccured.bind(this));
    }

    private executeWallIncoming_(): Promise<boolean> {
        return promise((res) => {
            let index = 0;
            const wallLength = FortGlobal.walls.length;
            const executeWallIncomingByIndex = () => {
                if (wallLength > index) {
                    const wall = FortGlobal.walls[index++];
                    const constructorArgsValues = InjectorHandler.getConstructorValues(wall.name);
                    const wallObj = new wall(...constructorArgsValues);
                    wallObj.cookie = this.cookieManager;
                    wallObj.session = this.session_;
                    wallObj.request = this.request as HttpRequest;
                    wallObj.response = this.response as HttpResponse;
                    wallObj.data = this.data_;
                    wallObj.query = this.query_;

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
                    }).catch(ex => {
                        this.onErrorOccured(ex);
                        res(false);
                    });
                }
                else {
                    res(true);
                }
            };
            executeWallIncomingByIndex();
        });
    }

    runController_;

    private executeShieldsProtection_(): Promise<boolean> {
        return promise((res) => {
            let index = 0;
            const shieldLength = this.routeMatchInfo_.shields.length;
            const executeShieldByIndex = () => {
                if (shieldLength > index) {
                    const shield = this.routeMatchInfo_.shields[index++];
                    const constructorArgsValues = InjectorHandler.getConstructorValues(shield.name);
                    const shieldObj = new shield(...constructorArgsValues);
                    shieldObj.cookie = this.cookieManager;
                    shieldObj.query = this.query_;
                    shieldObj.session = this.session_;
                    shieldObj.request = this.request as HttpRequest;
                    shieldObj.response = this.response as HttpResponse;
                    shieldObj.data = this.data_;
                    shieldObj.workerName = this.routeMatchInfo_.workerInfo.workerName;

                    const methodArgsValues = InjectorHandler.getMethodValues(shield.name, 'protect');

                    shieldObj.protect(...methodArgsValues).then(result => {
                        if (result == null) {
                            executeShieldByIndex();
                        }
                        else {
                            res(false);
                            this.onResultFromController(result);
                        }
                    }).catch(ex => {
                        this.onErrorOccured(ex);
                        res(false);
                    })

                }
                else {
                    res(true);
                }
            };
            executeShieldByIndex();
        });
    }

    private executeGuardsCheck_(guards: Array<typeof GenericGuard>): Promise<boolean> {
        return promise((res) => {
            let index = 0;
            const shieldLength = guards.length;
            const executeGuardByIndex = () => {
                if (shieldLength > index) {
                    const guard = guards[index++];
                    const constructorArgsValues = InjectorHandler.getConstructorValues(guard.name);
                    const guardObj = new guard(...constructorArgsValues);
                    guardObj.body = this.body;
                    guardObj.cookie = this.cookieManager;
                    guardObj.query = this.query_;
                    guardObj.session = this.session_;
                    guardObj.request = this.request as HttpRequest;
                    guardObj.response = this.response as HttpResponse;
                    guardObj.data = this.data_;
                    guardObj.file = this.file;
                    guardObj.param = this.routeMatchInfo_.params;

                    const methodArgsValues = InjectorHandler.getMethodValues(guard.name, 'check');
                    guardObj.check(...methodArgsValues).then(result => {
                        if (result == null) {
                            executeGuardByIndex();
                        }
                        else {
                            res(false);
                            this.onResultFromController(result);
                        }
                    }).catch(ex => {
                        this.onErrorOccured(ex);
                        res(false);
                    });
                }
                else {
                    res(true);
                }
            };
            executeGuardByIndex();
        });
    }

    private parseCookieFromRequest_() {
        if (FortGlobal.shouldParseCookie === true) {
            const rawCookie = (this.request.headers[__Cookie] || this.request.headers["cookie"]) as string;
            let parsedCookies;
            try {
                parsedCookies = parseCookie(rawCookie);
            } catch (ex) {
                this.onErrorOccured(ex);
                return false;
            }
            this.session_ = new FortGlobal.sessionProvider();
            this.session_.cookie = this.cookieManager = new CookieManager(parsedCookies);
            this.session_.sessionId = parsedCookies[FortGlobal.appSessionIdentifier];
        }
        else {
            this.cookieManager = new CookieManager({});
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
            this.query_ = compareExpectedAndRemoveUnnecessary(expectedQuery, this.query_, true);
        }
    }

    private checkExpectedBody_() {
        const expectedBody = RouteHandler.getExpectedBody(this.routeMatchInfo_.controllerName, this.routeMatchInfo_.workerInfo.workerName);
        if (expectedBody != null) {
            this.body = compareExpectedAndRemoveUnnecessary(expectedBody, this.body, false);
        }
    }

    private onRouteMatched_() {
        const actionInfo = this.routeMatchInfo_.workerInfo;
        if (actionInfo == null) {
            if (this.request.method === HTTP_METHOD.Options) {
                this.onRequestOptions(this.routeMatchInfo_.allowedHttpMethod);
            }
            else {
                this.onMethodNotAllowed(this.routeMatchInfo_.allowedHttpMethod);
            }
        }
        else {
            this.checkExpectedQuery_();
            if (this.query_ == null) {
                this.onBadRequest({
                    message: "Bad query string data - query string data does not match with expected value"
                } as IException);
                return;
            }
            this.executeShieldsProtection_().then(isAllowedByShield => {
                if (isAllowedByShield === false) return;
                return this.handlePostData().then(isPostDataValid => {
                    if (isPostDataValid === false) return;
                    this.checkExpectedBody_();
                    if (this.body == null) {
                        this.onBadRequest({
                            message: "Bad body data - body data does not match with expected value"
                        } as IException);
                        return;
                    }
                    return this.executeGuardsCheck_(actionInfo.guards).then(shouldExecuteController => {
                        if (shouldExecuteController === true) {
                            this.runController_();
                        }
                    });
                });
            });
        }
    }

    private execute_() {
        const urlDetail = url.parse(this.request.url, true);
        this.query_ = urlDetail.query;
        const isCookieValid = this.parseCookieFromRequest_();
        if (isCookieValid === false) return;
        this.executeWallIncoming_().then(isAllowedByWalls => {
            if (isAllowedByWalls === false) return;
            const pathUrl = urlDetail.pathname;
            const requestMethod = this.request.method as HTTP_METHOD;

            this.routeMatchInfo_ = parseAndMatchRoute(pathUrl.toLowerCase(), requestMethod);
            if (this.routeMatchInfo_ == null) { // no route matched
                // it may be a file or folder then
                this.handleFileRequest(pathUrl);
            }
            else {
                this.onRouteMatched_();
            }

        }).catch(ex => {
            this.onErrorOccured(ex);
        })

    }

    handlePostData() {
        if (this.request.method === HTTP_METHOD.Get) {
            this.body = {};
            this.file = new FileManager({});
            return promiseResolve(true);
        }

        if (FortGlobal.shouldParsePost === true) {
            return this.parsePostData().then(body => {
                this.body = body;
                return true;
            }).catch(ex => {
                this.onBadRequest(ex);
                return false;
            })
        }
    }

    handle() {
        this.setPreHeader_();
        this.execute_();
    }

    setControllerProps_() {
        const constructorValues = InjectorHandler.getConstructorValues(this.routeMatchInfo_.controller.name);
        const controllerObj: Controller = new this.routeMatchInfo_.controller(...constructorValues);
        controllerObj.request = this.request as HttpRequest;
        controllerObj.response = this.response;
        controllerObj.query = this.query_;
        controllerObj.body = this.body;
        controllerObj.session = this.session_;
        controllerObj.cookie = this.cookieManager;
        controllerObj.param = this.routeMatchInfo_.params;
        controllerObj.data = this.data_;
        controllerObj.file = this.file;
        const methodArgsValues = InjectorHandler.getMethodValues(this.routeMatchInfo_.controller.name, this.routeMatchInfo_.workerInfo.workerName);
        return controllerObj[this.routeMatchInfo_.workerInfo.workerName](...methodArgsValues);
    }
}
if (FortGlobal.isProduction) {
    RequestHandler.prototype.runController_ = function () {
        this.setControllerProps_().then(
            this.onResultFromController.bind(this)
        ).catch(this.onErrorOccured.bind(this));
    };
}
else {
    RequestHandler.prototype.runController_ = function () {
        const result = this.setControllerProps_();
        if (Promise.resolve(result) !== result) {
            this.onErrorOccured({
                message: "Wrong implementation - worker does not return promise"
            } as IException);
        }
        else {
            result.then(
                this.onResultFromController.bind(this)
            ).catch(this.onErrorOccured.bind(this));
        }
    };
}