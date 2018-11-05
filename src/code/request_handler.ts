import * as http from "http";
import { HTTP_STATUS_CODE, HTTP_METHOD, MIME_TYPE, ERROR_TYPE } from "./enums";
import { ActionResult } from "./model";
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

export class RequestHandler {
    private request_: http.IncomingMessage;
    private body_: any;
    private cookieManager_: CookieManager;
    private session_: GenericSessionProvider;
    private query_: any;
    private response_: http.ServerResponse

    private routeMatchInfo_: IRouteMatch;

    constructor(request: http.IncomingMessage, response: http.ServerResponse) {
        this.request_ = request;
        this.response_ = response;
        this.registerEvents();
    }

    private registerEvents() {
        this.request_.on('error', this.onBadRequest_);
        this.response_.on('error', (err) => {
            this.onErrorOccured_(err);
        });
    }

    private handlePostData_() {
        const body = [];
        let postData;
        return new Promise((resolve, reject) => {
            this.request_.on('data', (chunk) => {
                body.push(chunk);
            }).on('end', () => {
                const bodyBuffer = Buffer.concat(body);
                try {
                    const contentType = this.request_.headers[Content__Type];
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

    private runController_() {
        var controllerObj: Controller = new this.routeMatchInfo_.controller();
        controllerObj.request = this.request_ as IHttpRequest;
        controllerObj.response = this.response_;
        controllerObj.query = this.query_;
        controllerObj.body = this.body_;
        controllerObj.session = this.session_;
        controllerObj.cookies = this.cookieManager_;
        controllerObj.params = this.routeMatchInfo_.params;

        const result: ActionResult = controllerObj[this.routeMatchInfo_.actionInfo.action]();
        result.execute().then((result) => {
            if (this.cookieManager_ != null) {
                ((this.cookieManager_ as any).responseCookie_ as string[]).forEach(value => {
                    this.response_.setHeader(Set__Cookie, value);
                });
            }
            this.response_.writeHead(result.statusCode, { [Content__Type]: result.contentType });
            this.response_.end(result.responseData);
        }).catch(this.onErrorOccured_.bind(this))
    }

    private executeShieldsProtection_() {
        const shieldsPromise = [];
        this.routeMatchInfo_.shields.forEach(shield => {
            var shieldObj = new shield();
            shieldObj.body = this.body_;
            shieldObj.cookies = this.cookieManager_;
            shieldObj.query = this.query_;
            shieldObj.session = this.session_;
            shieldObj.request = this.request_ as IHttpRequest;
            shieldObj.response = this.response_ as IHttpResponse;
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
            guardObj.request = this.request_ as IHttpRequest;
            guardObj.response = this.response_ as IHttpResponse;
            guardPromise.push(guardObj.check());
        });
        return Promise.all(guardPromise);
    }

    private execute_() {
        try {
            this.response_.setHeader('X-Powered-By', App__Name);
            const urlDetail = url.parse(this.request_.url, true);
            let pathUrl = urlDetail.pathname.toLowerCase();
            const extension = path.parse(pathUrl).ext;
            if (!Util.isNullOrEmpty(extension)) {
                //console.log("file",path.parse(pathUrl));
                const fileHandlerObj = new FileHandler(pathUrl, extension);
                fileHandlerObj.execute().then(result => {
                    this.response_.writeHead(result.statusCode, { [Content__Type]: result.contentType });
                    this.response_.end(result.responseData);
                }).catch(this.onErrorOccured_.bind(this));
            }
            else {
                this.routeMatchInfo_ = parseAndMatchRoute(pathUrl);
                if (this.routeMatchInfo_ == null) {
                    this.onNotFound_();
                }
                else {
                    const requestType = this.request_.method as HTTP_METHOD;
                    const actionInfo = this.routeMatchInfo_.actionInfo;
                    if (actionInfo.methodsAllowed != null && actionInfo.methodsAllowed.indexOf(requestType) < 0) {
                        this.onMethodNotAllowed_(actionInfo.methodsAllowed);
                    }
                    else {
                        this.query_ = urlDetail.query;
                        if (Global.shouldParseCookie === true) {
                            const rawCookie = this.request_.headers[Cookie] as string;
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
                                        this.onForbiddenRequest_();
                                    }
                                }).catch(this.onErrorOccured_.bind(this));
                            }
                            else {
                                this.onForbiddenRequest_();
                            }
                        }).catch(this.onErrorOccured_.bind(this));
                    }
                }
            }
        }
        catch (ex) {
            this.onErrorOccured_(ex);
        }
    }

    handle() {
        if (this.request_.method === HTTP_METHOD.Get) {
            this.execute_();
        }
        else if (Global.shouldParsePost === true) {
            this.handlePostData_().then(body => {
                this.body_ = body;
                this.execute_();
            }).catch((err) => {
                this.onBadRequest_(err);
            })
        }
    }

    private onBadRequest_(error) {
        if (this.response_.headersSent === false) {
            this.response_.writeHead(HTTP_STATUS_CODE.Bad_Request, { [Content__Type]: MIME_TYPE.Html });
            let errMessage = `<h1>Bad Request</h1>
        <h3>message : ${error.message}</h3>`;
            if (error.stack) {
                errMessage += `<p><b>stacktrace:</b> ${error.stack}</p>`
            }
            else if (error.type) {
                errMessage += `<p><b>type:</b> ${error.type}</p>`
            }
            this.response_.end(errMessage);
        }
    }

    private onForbiddenRequest_() {
        if (this.response_.headersSent === false) {
            this.response_.writeHead(HTTP_STATUS_CODE.Forbidden, { [Content__Type]: MIME_TYPE.Html });
            let errMessage = `<h1>Forbidden</h1>`
            this.response_.end(errMessage);
        }
    }

    private onNotFound_() {
        if (this.response_.headersSent === false) {
            this.response_.writeHead(HTTP_STATUS_CODE.Not_Found, { [Content__Type]: MIME_TYPE.Text });
            this.response_.end(`The requested resource ${this.request_.url} was not found.`);
        }
    }

    private onMethodNotAllowed_(allowedMethods: HTTP_METHOD[]) {
        if (this.response_.headersSent === false) {
            this.response_.setHeader("Allow", allowedMethods.join(","));
            this.response_.writeHead(HTTP_STATUS_CODE.MethodNotAllowed, { [Content__Type]: MIME_TYPE.Text });
            this.response_.end(`Not allowed.`);
        }
    }

    private onErrorOccured_(error) {
        if (this.response_.headersSent === false) {
            this.response_.writeHead(HTTP_STATUS_CODE.Internal_Server_Error, { [Content__Type]: MIME_TYPE.Html });
            let errMessage = `<h1>internal server error</h1>
            <h3>message : ${error.message}</h3>`;
            if (error.stack) {
                errMessage += `<p><b>stacktrace:</b> ${error.stack}</p>`
            }
            else if (error.type) {
                errMessage += `<p><b>type:</b> ${error.type}</p>`
            }
            this.response_.end(errMessage);
        }
        else {
            console.error(error);
        }

    }
}