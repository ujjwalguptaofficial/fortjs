import * as http from "http";
import * as url from 'url';
import { Controller } from "./abstracts/controller";
import { Content__Type, App__Name, Cookie, App__Session__Identifier, Set__Cookie } from "./constant";
import * as qs from 'querystring';
import { Global } from "./global";
import { IHttpRequest } from "./interfaces/http_request";
import { parseCookie } from "./helpers/parse_cookie";
import { CookieManager } from "./model/cookie_manager";
import { IHttpResponse } from "./interfaces/http_response";
import { GenericSessionProvider } from "./model/generic_session_provider";
import { GenericGuard } from "./model/generic_guard";
import { parseAndMatchRoute } from "./helpers/parse_match_route";
import { IRouteMatch } from "./interfaces/route_match";
import * as path from 'path';
import { Util } from "./util";
import { FileHandler } from "./file_handler";
import { MIME_TYPE } from "./enums/mime_type";
import { HTTP_METHOD } from "./enums/http_method";
import { IActionResult } from "./interfaces/action_result";
import { RequestHandlerHelper } from "./request_handler_helper";

export class RequestHandler extends RequestHandlerHelper {
    private body_: any;
    private cookieManager_: CookieManager;
    private session_: GenericSessionProvider;
    private query_: any;
    private data_ = {};
    private routeMatchInfo_: IRouteMatch;

    constructor(request: http.IncomingMessage, response: http.ServerResponse) {
        super();
        this.request = request;
        this.response = response;
        this.registerEvents();
    }

    private registerEvents() {
        this.request.on('error', this.onBadRequest);
        this.response.on('error', (err) => {
            this.onErrorOccured(err);
        });
    }

    private handlePostData_() {
        const body = [];
        let postData;
        return new Promise((resolve, reject) => {
            this.request.on('data', (chunk) => {
                body.push(chunk);
            }).on('end', () => {
                const bodyBuffer = Buffer.concat(body);
                try {
                    const contentType = this.request.headers[Content__Type];
                    switch (contentType) {
                        case MIME_TYPE.Json:
                            postData = JSON.parse(bodyBuffer.toString()); break;
                        case MIME_TYPE.Text:
                        case MIME_TYPE.Html:
                            postData = bodyBuffer.toString(); break;
                        case MIME_TYPE.Form_Url_Encoded:
                            postData = qs.parse(bodyBuffer.toString()); break;

                    }
                    resolve(postData);
                }
                catch (ex) {
                    reject(ex);
                }
            });
        });
    }

    private executeWallBlock_() {
        const wallsPromise = [];
        Global.walls.forEach(wall => {
            var wallObj = new wall();
            wallObj.body = this.body_;
            wallObj.cookies = this.cookieManager_;
            wallObj.query = this.query_;
            wallObj.session = this.session_;
            wallObj.request = this.request as IHttpRequest;
            wallObj.response = this.response as IHttpResponse;
            wallObj.data = this.data_;
            wallsPromise.push(wallObj.block());
        });
        return Promise.all(wallsPromise);
    }

    private runController_() {
        var controllerObj: Controller = new this.routeMatchInfo_.controller();
        controllerObj.request = this.request as IHttpRequest;
        controllerObj.response = this.response;
        controllerObj.query = this.query_;
        controllerObj.body = this.body_;
        controllerObj.session = this.session_;
        controllerObj.cookies = this.cookieManager_;
        controllerObj.params = this.routeMatchInfo_.params;
        controllerObj.data = this.data_;
        controllerObj[this.routeMatchInfo_.actionInfo.action]().then((result: IActionResult) => {
            if (this.cookieManager_ != null) {
                ((this.cookieManager_ as any).responseCookie_ as string[]).forEach(value => {
                    this.response.setHeader(Set__Cookie, value);
                });
            }
            this.response.writeHead(result.statusCode,
                { [Content__Type]: result.contentType });
            this.response.end(result.responseData);
        }).catch(this.onErrorOccured.bind(this))
    }

    private executeShieldsProtection_() {
        const shieldsPromise = [];
        this.routeMatchInfo_.shields.forEach(shield => {
            var shieldObj = new shield();
            shieldObj.body = this.body_;
            shieldObj.cookies = this.cookieManager_;
            shieldObj.query = this.query_;
            shieldObj.session = this.session_;
            shieldObj.request = this.request as IHttpRequest;
            shieldObj.response = this.response as IHttpResponse;
            shieldObj.data = this.data_;
            shieldsPromise.push(shieldObj.protect());
        });
        return Promise.all(shieldsPromise);
    }

    private executeGuardsCheck_(guards: typeof GenericGuard[]) {
        const guardPromise = [];
        guards.forEach(guard => {
            const guardObj = new guard();
            guardObj.body = this.body_;
            guardObj.cookies = this.cookieManager_;
            guardObj.query = this.query_;
            guardObj.session = this.session_;
            guardObj.request = this.request as IHttpRequest;
            guardObj.response = this.response as IHttpResponse;
            guardObj.data = this.data_;
            guardPromise.push(guardObj.check());
        });
        return Promise.all(guardPromise);
    }

    private execute_() {
        try {
            this.response.setHeader('X-Powered-By', App__Name);
            this.executeWallBlock_().then(wallProtectionResult => {
                const isRejectedByWall = wallProtectionResult.indexOf(false) >= 0;
                if (isRejectedByWall === false) {
                    const urlDetail = url.parse(this.request.url, true);
                    let pathUrl = urlDetail.pathname.toLowerCase();
                    const extension = path.parse(pathUrl).ext;
                    if (!Util.isNullOrEmpty(extension)) {
                        const fileHandlerObj = new FileHandler(pathUrl, extension);
                        fileHandlerObj.execute().then(result => {
                            this.response.writeHead(result.statusCode, { [Content__Type]: result.contentType });
                            this.response.end(result.responseData);
                        }).catch(this.onErrorOccured.bind(this));
                    }
                    else {
                        this.routeMatchInfo_ = parseAndMatchRoute(pathUrl);
                        if (this.routeMatchInfo_ == null) {
                            this.onNotFound();
                        }
                        else {
                            const requestType = this.request.method as HTTP_METHOD;
                            const actionInfo = this.routeMatchInfo_.actionInfo;
                            if (actionInfo.methodsAllowed != null && actionInfo.methodsAllowed.indexOf(requestType) < 0) {
                                this.onMethodNotAllowed(actionInfo.methodsAllowed);
                            }
                            else {
                                this.query_ = urlDetail.query;
                                if (Global.shouldParseCookie === true) {
                                    const rawCookie = this.request.headers[Cookie] as string;
                                    const parsedCookies = parseCookie(rawCookie);
                                    this.session_ = new Global.sessionProvider();
                                    this.cookieManager_ = new CookieManager(parsedCookies);
                                    this.session_.sessionId = parsedCookies[App__Session__Identifier];
                                    this.session_.cookies = this.cookieManager_;
                                }
                                this.executeShieldsProtection_().then((shieldProtectionResult: Boolean[]) => {
                                    const isRejectedByShield = shieldProtectionResult.indexOf(false) >= 0;
                                    if (isRejectedByShield === false) {
                                        this.executeGuardsCheck_(actionInfo.guards).then(guardsCheckResult => {
                                            const isRejectedByGuard = guardsCheckResult.indexOf(false) >= 0;
                                            if (isRejectedByGuard === false) {
                                                this.runController_();
                                            }
                                            else {
                                                this.onForbiddenRequest();
                                            }
                                        }).catch(this.onErrorOccured.bind(this));
                                    }
                                    else {
                                        this.onForbiddenRequest();
                                    }
                                }).catch(this.onErrorOccured.bind(this));
                            }
                        }
                    }
                }
                else {
                    this.onForbiddenRequest();
                }
            }).catch(this.onErrorOccured.bind(this));
        }
        catch (ex) {
            this.onErrorOccured(ex);
        }
    }

    handle() {
        if (this.request.method === HTTP_METHOD.Get) {
            this.execute_();
        }
        else if (Global.shouldParsePost === true) {
            this.handlePostData_().then(body => {
                this.body_ = body;
                this.execute_();
            }).catch((err) => {
                this.onBadRequest(err);
            })
        }
    }
}