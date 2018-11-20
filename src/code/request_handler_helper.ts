import { HTTP_STATUS_CODE } from "./enums/http_status_code";
import * as http from "http";
import { Content__Type } from "./constant";
import { MIME_TYPE } from "./enums/mime_type";
import { HTTP_METHOD } from "./enums/http_method";
import { Global } from "./global";
import * as Negotiator from "negotiator";
import { CookieManager } from "./model/cookie_manager";
export class RequestHandlerHelper {
    protected cookieManager: CookieManager;
    protected response: http.ServerResponse;

    protected request: http.IncomingMessage;

    protected getContentTypeFromNegotiation(type: MIME_TYPE) {
        const negotiator = new Negotiator(this.request);
        let availableTypes: MIME_TYPE[] = this.getAvailableTypes_(type);
        if (availableTypes == null) {
            availableTypes = [type];
        }
        return negotiator.mediaType(availableTypes) as MIME_TYPE;
    }

    protected getContentTypeFromNegotiationHavingMultipleTypes(types: MIME_TYPE[]) {
        const negotiator = new Negotiator(this.request);
        return negotiator.mediaType(types) as MIME_TYPE;
    }

    private getAvailableTypes_(type: MIME_TYPE) {
        switch (type) {
            case MIME_TYPE.Json:
            case MIME_TYPE.Xml:
                return [MIME_TYPE.Json, MIME_TYPE.Xml];
            case MIME_TYPE.Html:
            case MIME_TYPE.Css:
            case MIME_TYPE.Csv:
            case MIME_TYPE.Js:
            case MIME_TYPE.Rtf:
            case MIME_TYPE.Text:
                return [MIME_TYPE.Text, MIME_TYPE.Html, MIME_TYPE.Js,
                MIME_TYPE.Css, MIME_TYPE.Rtf, MIME_TYPE.Csv];
        }
        return null;
    }

    protected onBadRequest(error) {

        new Global.errorHandler().onBadRequest(error).then(errMessage => {
            this.response.writeHead(HTTP_STATUS_CODE.BadRequest, { [Content__Type]: MIME_TYPE.Html });
            this.response.end(errMessage);
        }).catch(err => {
            this.response.end(JSON.stringify(err));
        });
    }

    protected onForbiddenRequest() {
        this.response.writeHead(HTTP_STATUS_CODE.Forbidden, { [Content__Type]: MIME_TYPE.Html });
        new Global.errorHandler().onForbiddenRequest().then(errMessage => {
            this.response.end(errMessage);
        }).catch(err => {
            this.response.end(JSON.stringify(err));
        });
    }

    protected onNotAcceptableRequest() {
        this.response.writeHead(HTTP_STATUS_CODE.NotAcceptable, { [Content__Type]: MIME_TYPE.Html });
        new Global.errorHandler().onNotAcceptableRequest().then(errMessage => {
            this.response.end(errMessage);
        }).catch(err => {
            this.response.end(JSON.stringify(err));
        });
    }

    protected onNotFound() {

        new Global.errorHandler().onNotFound(this.request.url).then(result => {
            this.response.writeHead(HTTP_STATUS_CODE.Not_Found, { [Content__Type]: MIME_TYPE.Html });
            this.response.end(result);
        }).catch(err => {
            this.response.end(JSON.stringify(err));
        })
    }

    protected onMethodNotAllowed(allowedMethods: HTTP_METHOD[]) {
        new Global.errorHandler().onMethodNotAllowed().then(result => {
            this.response.setHeader("Allow", allowedMethods.join(","));
            this.response.writeHead(HTTP_STATUS_CODE.MethodNotAllowed, { [Content__Type]: MIME_TYPE.Html });
            this.response.end(result);
        }).catch(err => {
            this.response.end(JSON.stringify(err));
        });
    }

    protected onErrorOccured(error) {
        new Global.errorHandler().onServerError(error).then(result => {
            this.response.writeHead(HTTP_STATUS_CODE.InternalServerError, { [Content__Type]: MIME_TYPE.Html });
            this.response.end(result);
        }).catch(err => {
            this.response.end(JSON.stringify(err));
        });
    }
}