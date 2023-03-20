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

    protected onBadRequest(error) {
        return new FortGlobal.errorHandler().onBadRequest(error).then(data => {
            return this.onResultFromError_(data);
        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
    }

    protected onForbiddenRequest() {
        return new FortGlobal.errorHandler().onForbiddenRequest().then(data => {
            return this.onResultFromError_(data);
        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
    }

    protected onNotAcceptableRequest() {
        return new FortGlobal.errorHandler().onNotAcceptableRequest().then(data => {
            return this.onResultFromError_(data);
        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
    }

    protected onNotFound() {
        return new FortGlobal.errorHandler().onNotFound(this.request.url).then(data => {
            return this.onResultFromError_(data);
        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
    }

    protected onMethodNotAllowed(allowedMethods: HTTP_METHOD[]) {

        return new FortGlobal.errorHandler().onMethodNotAllowed().then(data => {
            this.response.setHeader("Allow", allowedMethods.join(","));
            return this.onResultFromError_(data);
        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
    }

    // it won't execute wallOutgoing as if there is some issue in wallOutgoing
    // then it would become an infinite loop
    // treat it as someone comes to your fort & they start doing things 
    // which was not supposed to be done
    // then you don't follow regular rules but just throw them from anywhere
    protected onErrorOccured(error) {
        if (typeof error === 'string') {
            error = {
                message: error
            } as IException;
        }
        return new FortGlobal.errorHandler().onServerError(error).then(data => {
            this.controllerResult = data;
            return this.returnResultFromError_();
        }).catch(ex => {
            const response = {
                message: ex.message,
                stack: ex.stack
            } as any;
            this.controllerResult = response;
            return this.returnResultFromError_();
        });

        // if (typeof error === 'string') {
        //     error = {
        //         message: error
        //     } as IException;
        // }
        // let response;
        // try {
        //     response = await new FortGlobal.errorHandler().onServerError(error);
        // }
        // catch (ex) {
        //     response = JsonHelper.stringify(ex);
        // }
        // this.controllerResult = response;
        // this.returnResultFromError_();
    }

    protected onRequestOptions(allowedMethods: HTTP_METHOD[]) {
        this.response.setHeader("Allow", allowedMethods.join(","));
        return this.onResultFromError_(textResult(""));
    }

    private onResultFromError_(result: HttpResult | HttpFormatResult) {
        this.controllerResult = result;
        return this.runWallOutgoing().then(_ => {
            return this.returnResultFromError_();

        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
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

        const data = getResultBasedOnMiMe(negotiateMimeType,
            (this.controllerResult as HttpResult).responseData
            , (type: MIME_TYPE) => {
                negotiateMimeType = type;
            }
        );

        this.response.writeHead(this.controllerResult.statusCode || HTTP_STATUS_CODE.Ok,
            { [__ContentType]: negotiateMimeType });
        this.response.end(data);
    }

}