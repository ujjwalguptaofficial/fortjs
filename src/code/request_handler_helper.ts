import { HTTP_STATUS_CODE } from "./enums/http_status_code";
import * as http from "http";
import { Content__Type } from "./constant";
import { MIME_TYPE } from "./enums/mime_type";
import { HTTP_METHOD } from "./enums/http_method";
export class RequestHandlerHelper {
    protected response: http.ServerResponse;
    
    protected request: http.IncomingMessage;
    protected onBadRequest(error) {
        if (this.response.headersSent === false) {
            this.response.writeHead(HTTP_STATUS_CODE.Bad_Request, { [Content__Type]: MIME_TYPE.Html });
            let errMessage = `<h1>Bad Request</h1>
        <h3>message : ${error.message}</h3>`;
            if (error.stack) {
                errMessage += `<p><b>stacktrace:</b> ${error.stack}</p>`
            }
            else if (error.type) {
                errMessage += `<p><b>type:</b> ${error.type}</p>`
            }
            this.response.end(errMessage);
        }
    }

    protected onForbiddenRequest() {
        if (this.response.headersSent === false) {
            this.response.writeHead(HTTP_STATUS_CODE.Forbidden, { [Content__Type]: MIME_TYPE.Html });
            let errMessage = `<h1>Forbidden</h1>`
            this.response.end(errMessage);
        }
    }

    protected onNotFound() {
        if (this.response.headersSent === false) {
            this.response.writeHead(HTTP_STATUS_CODE.Not_Found, { [Content__Type]: MIME_TYPE.Text });
            this.response.end(`The requested resource ${this.request.url} was not found.`);
        }
    }

    protected onMethodNotAllowed(allowedMethods: HTTP_METHOD[]) {
        if (this.response.headersSent === false) {
            this.response.setHeader("Allow", allowedMethods.join(","));
            this.response.writeHead(HTTP_STATUS_CODE.MethodNotAllowed, { [Content__Type]: MIME_TYPE.Text });
            this.response.end(`Not allowed.`);
        }
    }

    protected onErrorOccured(error) {
        if (this.response.headersSent === false) {
            this.response.writeHead(HTTP_STATUS_CODE.Internal_Server_Error, { [Content__Type]: MIME_TYPE.Html });
            let errMessage = `<h1>internal server error</h1>
            <h3>message : ${error.message}</h3>`;
            if (error.stack) {
                errMessage += `<p><b>stacktrace:</b> ${error.stack}</p>`
            }
            else if (error.type) {
                errMessage += `<p><b>type:</b> ${error.type}</p>`
            }
            this.response.end(errMessage);
        }
        else {
            console.error(error);
        }
    }
}