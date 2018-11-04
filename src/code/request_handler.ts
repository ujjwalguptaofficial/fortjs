import * as http from "http";
import { HTTP_STATUS_CODE, HTTP_METHOD, MIME_TYPE, ERROR_TYPE } from "./enums";
import { getRouteDetail } from "./helper";
import { ActionResult } from "./model";
import * as url from 'url';
import { Controller } from "./abstracts/controller";
import { ContentType, AppName, Cookie, AppSessionIdentifier, SetCookie } from "./constant";
import * as qs from 'querystring';
import { Global } from "./global";
import { IHttpRequest } from "./interfaces/http_request";
import { parseCookie } from "./helpers/parse_cookie";
import { CookieManager } from "./model/cookie_manager";
import { RouteHandler } from "./route_handler";
import { IHttpResponse } from "./interfaces/http_response";
import { GenericShield } from "./model/generic_shield";
import { SessionProvider } from "./abstracts";
import { GenericController } from "./model/generic_controller";
import { IRouteActionInfo } from "./interfaces/route_action_info";

export class RequestHandler {
    private request_: http.IncomingMessage;
    private body_: any;
    private cookieManager_: CookieManager;
    private session_: SessionProvider;
    private query_: any;
    private response_: http.ServerResponse
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
                    const contentType = this.request_.headers[ContentType];
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

    private runController_(controller: typeof GenericController, actionName: string) {
        var controllerObj: Controller = new controller();
        controllerObj.request = this.request_ as IHttpRequest;
        controllerObj.response = this.response_;
        controllerObj.query = this.query_;
        controllerObj.body = this.body_;
        controllerObj.session = Global.sessionProvider;
        controllerObj.cookies = this.cookieManager_;

        const result: ActionResult = controllerObj[actionName]();
        result.execute().then((result) => {
            if (this.cookieManager_ != null) {
                ((this.cookieManager_ as any).responseCookie_ as string[]).forEach(value => {
                    this.response_.setHeader(SetCookie, value);
                });
            }
            this.response_.writeHead(result.statusCode, { [ContentType]: result.contentType });
            this.response_.end(result.responseData);
        }).catch(this.onErrorOccured_.bind(this))
    }

    private executeShieldsProtection_(shields: typeof GenericShield[]) {
        const shieldsPromise = [];
        shields.forEach(shield => {
            var shieldObj = new shield();
            shieldObj.body = this.body_;
            shieldObj.cookies = this.cookieManager_;
            shieldObj.query = this.query_;
            shieldObj.session = Global.sessionProvider;
            shieldObj.request = this.request_ as IHttpRequest;
            shieldObj.response = this.response_ as IHttpResponse;
            shieldsPromise.push(shieldObj.protect());
        });
        return Promise.all(shieldsPromise);
    }

    private executeGuardsCheck_(action: IRouteActionInfo) {
        const guardPromise = [];
        action.guards.forEach(guard => {
            const guardObj = new guard();
            guardPromise.push(guardObj.check());
        });
        return Promise.all(guardPromise);
    }

    private execute_() {
        try {
            this.response_.setHeader('X-Powered-By', AppName);
            const urlDetail = url.parse(this.request_.url, true);
            const path = urlDetail.pathname.toLowerCase();
            const routeUrlDetail = getRouteDetail(path);
            const routeInfo = RouteHandler.routerCollection.find(x => x.path === routeUrlDetail.controllerName);
            if (routeInfo == null) {
                this.onNotFound_();
            }
            else {
                const requestType = this.request_.method as HTTP_METHOD;
                const actionInfo = routeInfo.actions.find(x => x.action === routeUrlDetail.actionName);
                if (actionInfo == null) {
                    this.onNotFound_();
                }
                else if (actionInfo.methodsAllowed != null && actionInfo.methodsAllowed.indexOf(requestType) < 0) {
                    this.onMethodNotAllowed_(actionInfo.methodsAllowed);
                }
                else {
                    this.query_ = urlDetail.query;
                    if (Global.shouldParseCookie === true) {
                        const rawCookie = this.request_.headers[Cookie] as string;
                        const parsedCookies = parseCookie(rawCookie);
                        Global.sessionProvider.sessionId = parsedCookies[AppSessionIdentifier];
                        this.cookieManager_ = new CookieManager(parsedCookies);
                        Global.sessionProvider.cookies = this.cookieManager_;
                    }
                    this.executeShieldsProtection_(routeInfo.shields).then((shieldProtectionResult: Boolean[]) => {
                        const isRejectedByShield = shieldProtectionResult.indexOf(false) >= 0;
                        if (isRejectedByShield === false) {
                            this.executeGuardsCheck_(actionInfo).then(guardsCheckResult => {
                                const isRejectedByGuard = guardsCheckResult.indexOf(false) >= 0;
                                if (isRejectedByGuard === false) {
                                    this.runController_(routeInfo.controller, actionInfo.action);
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
        this.response_.writeHead(HTTP_STATUS_CODE.Bad_Request, { [ContentType]: MIME_TYPE.Html });
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

    private onForbiddenRequest_() {
        this.response_.writeHead(HTTP_STATUS_CODE.Forbidden, { [ContentType]: MIME_TYPE.Html });
        let errMessage = `<h1>Forbidden</h1>`
        this.response_.end(errMessage);
    }

    private onNotFound_() {
        this.response_.writeHead(HTTP_STATUS_CODE.Not_Found, { [ContentType]: MIME_TYPE.Text });
        this.response_.end(`The requested resource ${this.request_.url} was not found.`);
    }

    private onMethodNotAllowed_(allowedMethods: HTTP_METHOD[]) {
        this.response_.setHeader("Allow", allowedMethods.join(","));
        this.response_.writeHead(HTTP_STATUS_CODE.MethodNotAllowed, { [ContentType]: MIME_TYPE.Text });
        this.response_.end(`Not allowed.`);
    }

    private onErrorOccured_(error) {
        this.response_.writeHead(HTTP_STATUS_CODE.Internal_Server_Error, { [ContentType]: MIME_TYPE.Html });
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
}