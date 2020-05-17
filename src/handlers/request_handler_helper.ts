import { HTTP_STATUS_CODE, MIME_TYPE, HTTP_METHOD } from "../enums";
import * as http from "http";
import { __ContentType, __SetCookie } from "../constant";
import { FortGlobal } from "../fort_global";
import * as Negotiator from "negotiator";
import { CookieManager } from "../models";
import { Wall } from "../abstracts";
import { IException } from "../interfaces";
import { JsonHelper, reverseLoop, textResult, getResultBasedOnMiMe } from "../helpers";
import { InjectorHandler } from "./injector_handler";
import { HttpResult, HttpFormatResult } from "../types";


export class RequestHandlerHelper {
    protected cookieManager: CookieManager;
    protected response: http.ServerResponse;
    protected request: http.IncomingMessage;

    protected wallInstances: Wall[] = [];

    protected controllerResult: HttpResult | HttpFormatResult = {} as any;

    protected runWallOutgoing() {
        const outgoingResults: Array<Promise<any>> = [];
        reverseLoop(this.wallInstances, (value: Wall) => {
            const methodArgsValues = InjectorHandler.getMethodValues(value.constructor.name, 'onOutgoing');
            methodArgsValues.shift();
            outgoingResults.push(value.onOutgoing(this.controllerResult, ...methodArgsValues));
        });
        return Promise.all(outgoingResults);
    }

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

    protected async onBadRequest(error) {
        let message;
        try {
            message = await new FortGlobal.errorHandler().onBadRequest(error);
        }
        catch (ex) {
            return this.onErrorOccured(ex);
        }
        this.onResultFromError(message);
    }

    protected async onForbiddenRequest() {
        let message;
        try {
            message = await new FortGlobal.errorHandler().onForbiddenRequest();
        }
        catch (ex) {
            return this.onErrorOccured(ex);
        }
        this.onResultFromError(message);
    }

    protected async onNotAcceptableRequest() {
        let errMessage;
        try {
            errMessage = await new FortGlobal.errorHandler().onNotAcceptableRequest();
        }
        catch (ex) {
            return this.onErrorOccured(ex);
        }
        this.onResultFromError(errMessage);
    }

    protected async onNotFound() {
        let response;
        try {
            response = await new FortGlobal.errorHandler().onNotFound(this.request.url);
        }
        catch (ex) {
            return this.onErrorOccured(ex);
        }
        this.onResultFromError(response);
    }

    protected async onMethodNotAllowed(allowedMethods: HTTP_METHOD[]) {
        let response;
        try {
            response = await new FortGlobal.errorHandler().onMethodNotAllowed();
        }
        catch (ex) {
            return this.onErrorOccured(ex);
        }
        this.response.setHeader("Allow", allowedMethods.join(","));
        this.onResultFromError(response);
    }

    protected async onErrorOccured(error) {
        if (typeof error === 'string') {
            error = {
                message: error
            } as IException;
        }
        let errMessage;
        try {
            await this.runWallOutgoing();
            errMessage = await new FortGlobal.errorHandler().onServerError(error);
        }
        catch (ex) {
            errMessage = JsonHelper.stringify(ex);
        }
        this.response.writeHead(HTTP_STATUS_CODE.InternalServerError, { [__ContentType]: MIME_TYPE.Html });
        this.response.end(errMessage);
    }

    protected async onRequestOptions(allowedMethods: HTTP_METHOD[]) {
        try {
            await this.runWallOutgoing();
        }
        catch (ex) {
            return this.onErrorOccured(ex);
        }
        this.response.setHeader("Allow", allowedMethods.join(","));
        this.response.writeHead(HTTP_STATUS_CODE.Ok, { [__ContentType]: MIME_TYPE.Html });
        this.response.end("");
    }

    private async  onResultFromError(result: HttpResult | HttpFormatResult) {
        this.controllerResult = result;
        try {
            await this.runWallOutgoing();
        } catch (ex) {
            this.onErrorOccured(ex);
            return;
        }
        this.returnResultFromError_();
    }

    private returnResultFromError_() {
        const result = this.controllerResult;
        ((this.cookieManager as any).responseCookie_ as string[]).forEach(value => {
            this.response.setHeader(__SetCookie, value);
        });

        if ((result as HttpFormatResult).responseFormat == null) {
            const contentType = (result as HttpResult).contentType || MIME_TYPE.Text;
            const negotiateMimeType = this.getContentTypeFromNegotiation(contentType) as MIME_TYPE;
            if (negotiateMimeType != null) {
                this.endResponse_(negotiateMimeType);
            }
            else {
                this.endResponse_(contentType);
            }
        }
        else {
            this.handleFormatResult_(true);
        }
    }

    protected handleFormatResult_(shouldSendFirstMatch = false) {
        const negotiateMimeType = this.getContentTypeFromNegotiationHavingMultipleTypes(Object.keys((this.controllerResult as HttpFormatResult).responseFormat) as MIME_TYPE[]);
        let key = Object.keys((this.controllerResult as HttpFormatResult).responseFormat).find(qry => qry === negotiateMimeType);
        if (key != null) {
            (this.controllerResult as HttpResult).responseData = (this.controllerResult as HttpFormatResult).responseFormat[key]();
            this.endResponse_(negotiateMimeType);
        }
        else if (shouldSendFirstMatch === true) {
            key = Object.keys((this.controllerResult as HttpFormatResult).responseFormat)[0];
            (this.controllerResult as HttpResult).responseData = (this.controllerResult as HttpFormatResult).responseFormat[key]();
            this.endResponse_(negotiateMimeType);
        }
        else {
            this.onNotAcceptableRequest();
        }
    }

    protected endResponse_(negotiateMimeType: MIME_TYPE) {
        let data;
        try {
            data = getResultBasedOnMiMe(negotiateMimeType,
                (this.controllerResult as HttpResult).responseData
                , (type: MIME_TYPE) => {
                    negotiateMimeType = type;
                }
            );
        }
        catch (ex) {
            this.onErrorOccured(ex);
            return;
        }

        this.response.writeHead(this.controllerResult.statusCode || HTTP_STATUS_CODE.Ok,
            { [__ContentType]: negotiateMimeType });
        this.response.end(data);
    }

}