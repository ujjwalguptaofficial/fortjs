import * as http from "http";
import { HTTP_STATUS_CODE, HTTP_METHOD, MIME_TYPE, ERROR_TYPE } from "./enums";
import { getRouteDetail, getRouteFromPath } from "./helper";
import { ActionResult } from "./model";
import * as url from 'url';
import { Controller } from "./controller";
import { Util } from "./util";
import { ContentType } from "./constant";
import * as qs from 'querystring';

export class RequestHandler {
    private request_: http.IncomingMessage;
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

    private execute_(body) {
        try {
            this.response_.setHeader('X-Powered-By', 'infinity');
            const urlDetail = url.parse(this.request_.url, true);
            const path = urlDetail.pathname.toLowerCase();
            const routeUrlDetail = getRouteDetail(path);
            const routeInfo = getRouteFromPath(routeUrlDetail.controllerName);
            const requestType = this.request_.method as HTTP_METHOD;
            if (routeInfo == null) {
                this.onNotFound_();
            }
            else {
                const actionInfo = routeInfo.actions.find(x => x.action === routeUrlDetail.actionName);
                if (actionInfo == null) {
                    this.onNotFound_();
                }
                else if (actionInfo.methodsAllowed.indexOf(requestType) < 0) {
                    this.onMethodNotAllowed_(actionInfo.methodsAllowed);
                }
                else {
                    var controllerObj: Controller = new (routeInfo.controller as any)();
                    controllerObj.request = this.request_;
                    controllerObj.response = this.response_;
                    controllerObj.query = urlDetail.query;
                    controllerObj.body = body;
                    const result: ActionResult = controllerObj[actionInfo.action]();
                    result.execute().then((result) => {
                        this.response_.writeHead(result.statusCode, result.contentType);
                        this.response_.end(result.responseData);
                    }).catch(err => {
                        this.onErrorOccured_(err)
                    })
                }
            }
        }
        catch (ex) {
            this.onErrorOccured_(ex);
        }
    }

    handle() {
        if (this.request_.method === HTTP_METHOD.Get) {
            this.execute_(null);
        }
        else {
            this.handlePostData_().then(body => {
                this.execute_(body);
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