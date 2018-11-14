import { HTTP_STATUS_CODE } from "./enums/http_status_code";
import * as http from "http";
import { Content__Type } from "./constant";
import { MIME_TYPE } from "./enums/mime_type";
import { HTTP_METHOD } from "./enums/http_method";
import { Global } from "./global";
export class RequestHandlerHelper {
    protected response: http.ServerResponse;

    protected request: http.IncomingMessage;
    protected onBadRequest(error) {
        if (this.response.headersSent === false) {
            this.response.writeHead(HTTP_STATUS_CODE.Bad_Request, { [Content__Type]: MIME_TYPE.Html });
            new Global.errorHandler().onBadRequest(error).then(errMessage => {
                this.response.end(errMessage);
            }).catch(err => {
                this.response.end(JSON.stringify(err));
            })
        }
    }

    protected onForbiddenRequest() {
        if (this.response.headersSent === false) {
            this.response.writeHead(HTTP_STATUS_CODE.Forbidden, { [Content__Type]: MIME_TYPE.Html });
            new Global.errorHandler().onForbiddenRequest().then(errMessage => {
                this.response.end(errMessage);
            }).catch(err => {
                this.response.end(JSON.stringify(err));
            })
        }
    }

    protected onNotFound() {
        if (this.response.headersSent === false) {
            this.response.writeHead(HTTP_STATUS_CODE.Not_Found, { [Content__Type]: MIME_TYPE.Html });
            new Global.errorHandler().onNotFound(this.request.url).then(result => {
                this.response.end(result);
            }).catch(err => {
                this.response.end(JSON.stringify(err));
            })
        }
    }

    protected onMethodNotAllowed(allowedMethods: HTTP_METHOD[]) {
        if (this.response.headersSent === false) {
            this.response.setHeader("Allow", allowedMethods.join(","));
            this.response.writeHead(HTTP_STATUS_CODE.MethodNotAllowed, { [Content__Type]: MIME_TYPE.Html });
            new Global.errorHandler().onMethodNotAllowed().then(result => {
                this.response.end(result);
            }).catch(err => {
                this.response.end(JSON.stringify(err));
            })
        }
    }

    protected onErrorOccured(error) {
        if (this.response.headersSent === false) {
            this.response.writeHead(HTTP_STATUS_CODE.Internal_Server_Error, { [Content__Type]: MIME_TYPE.Html });
            new Global.errorHandler().onServerError(error).then(result => {
                this.response.end(result);
            }).catch(err => {
                this.response.end(JSON.stringify(err));
            })
        }
        else {
            console.error(error);
        }
    }
}