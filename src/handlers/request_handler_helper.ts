import { HTTP_STATUS_CODE, MIME_TYPE, HTTP_METHOD, HTTP_RESULT_TYPE } from "../enums";
import { CONTENT_TYPE, SET_COOKIE } from "../constants";
import * as Negotiator from "negotiator";
import { IComponentProp, IException, IHttpResult } from "../interfaces";
import { textResult, getResultBasedOnMiMe, getAvailableMimeTypes, CustomResultOption, T_CUSTOM_RESULT } from "../helpers";
import { HttpFormatResult } from "../types";
import { App } from "../models";

export class RequestHandlerHelper {
    protected componentProps: IComponentProp;

    protected controllerResult: IHttpResult;

    get request() {
        return this.componentProps.request;
    }

    get response() {
        return this.componentProps.response;
    }

    constructor(public config: App) {

    }

    protected getContentTypeFromNegotiation(type: MIME_TYPE) {
        return this.getContentTypeFromNegotiationHavingMultipleTypes(
            getAvailableMimeTypes(type) || [type]
        );
    }

    protected getContentTypeFromNegotiationHavingMultipleTypes(types: readonly MIME_TYPE[]) {
        const negotiator = new Negotiator(this.request);
        return negotiator.mediaType(types as any) as MIME_TYPE;
    }

    protected onBadRequest(error) {
        return this.errorHandler().onBadRequest(error).then(data => {
            return this.onResultFromError_(data);
        });
    }

    protected onForbiddenRequest() {
        return this.errorHandler().onForbiddenRequest().then(data => {
            return this.onResultFromError_(data);
        });
    }

    protected onNotAcceptableRequest() {
        return this.errorHandler().onNotAcceptableRequest().then(data => {
            return this.onResultFromError_(data);
        });
    }

    errorHandler() {
        const err = new this.config.errorHandler();
        err['componentProp_'] = this.componentProps;
        return err;
    }

    public onNotFound() {
        return this.errorHandler().onNotFound(this.request.url).then(data => {
            return this.onResultFromError_(data);
        });
    }

    protected onMethodNotAllowed(allowedMethods: HTTP_METHOD[]) {
        return this.errorHandler().onMethodNotAllowed().then(data => {
            this.response.setHeader("Allow", allowedMethods.join(","));
            return this.onResultFromError_(data);
        });
    }

    // it won't execute wallOutgoing as if there is some issue in wallOutgoing
    // then it would become an infinite loop
    // treat it as someone comes to your fort & they start doing things 
    // which was not supposed to be done
    // then you don't follow regular rules but just throw them from anywhere
    onErrorOccured(error) {
        if (this.response.headersSent) {
            console.log("Response already sent, cannot send error response");
            return;
        }
        if (typeof error === 'string') {
            error = {
                message: error
            } as IException;
        }
        return this.errorHandler().onServerError(error).then(data => {
            this.controllerResult = data;
            return this.returnResultFromError_();
        }).catch(ex => {
            const response = {
                message: ex.message,
                stack: ex.stack,
                type: ex.type
            };
            this.controllerResult = JSON.stringify(response) as any;
            return this.returnResultFromError_();
        });
    }

    protected onRequestOptions(allowedMethods: HTTP_METHOD[]) {
        this.response.setHeader("Allow", allowedMethods.join(","));
        this.controllerResult = textResult("");
        return this.endResponse_(
            MIME_TYPE.Text,
            false
        );
    }

    private onResultFromError_(result: IHttpResult) {
        this.controllerResult = result;
        this.returnResultFromError_();
    }

    setCookie() {
        if (this.config.shouldParseCookie === false) return;
        // empty array as default is required to make sure in case of responseCookie_ is not present
        (this.componentProps.cookie['responseCookie_'] || []).forEach(value => {
            this.response.setHeader(SET_COOKIE, value);
        });
    }

    private returnResultFromError_() {
        const result = this.controllerResult;
        this.setCookie();

        switch (result.type) {
            case HTTP_RESULT_TYPE.Default:
                {
                    const contentType = result.contentType || MIME_TYPE.Text;
                    const negotiateMimeType = this.getContentTypeFromNegotiation(contentType) as MIME_TYPE;
                    this.endResponse_(negotiateMimeType != null ? negotiateMimeType : contentType);
                }
                break;
            case HTTP_RESULT_TYPE.FormattedResult:
                return this.handleFormatResult_();
        }
    }

    protected handleFormatResult_(shouldSendFirstMatch = false) {
        const controllerResult = this.controllerResult;
        const responseData = controllerResult.responseData as HttpFormatResult;
        const negotiateMimeType = this.getContentTypeFromNegotiationHavingMultipleTypes(Object.keys(responseData) as MIME_TYPE[]);
        let key = Object.keys(responseData).find(qry => qry === negotiateMimeType);
        if (key != null) {
            controllerResult.responseData = responseData[key]();
            this.endResponse_(negotiateMimeType);
        }
        else if (shouldSendFirstMatch === true) {
            key = Object.keys(responseData)[0];
            controllerResult.responseData = responseData[key]();
            this.endResponse_(negotiateMimeType);
        }
        else {
            return this.onNotAcceptableRequest();
        }
    }

    protected endResponse_(negotiateMimeType: MIME_TYPE, shouldEvaluateData = true) {
        const data = shouldEvaluateData ? getResultBasedOnMiMe(negotiateMimeType,
            (this.controllerResult).responseData
            , (type: MIME_TYPE) => {
                negotiateMimeType = type;
            }
        ) : "";

        const response = this.response;

        // double check to avoid multiple end calls
        // placement is before writing head to avoid writing head multiple times
        if (response.headersSent || response.writableEnded) {
            console.trace("Request is finished, but triggered again");
            return;
        }

        response.writeHead(this.controllerResult.statusCode || HTTP_STATUS_CODE.Ok,
            { [CONTENT_TYPE]: negotiateMimeType });
        response.end(data);
    }

    private async handleCustomResult_() {
        const result = this.controllerResult as IHttpResult;
        const customResult = result.responseData as T_CUSTOM_RESULT;
        const option = new CustomResultOption(this.componentProps);
        const resultFromCustomResult = await customResult(
            option
        );
        if (resultFromCustomResult) {
            this.controllerResult = resultFromCustomResult;
            return this.handleFinalResult_();
        }
    }

    protected handleFinalResult_() {
        const result: IHttpResult = this.controllerResult;
        this.setCookie();

        switch (result.type) {
            case HTTP_RESULT_TYPE.Default:
                {
                    const headerSetByUser = this.response.hasHeader(CONTENT_TYPE);
                    const contentType = headerSetByUser ? this.response.getHeader(CONTENT_TYPE) as MIME_TYPE : (result.contentType || MIME_TYPE.Text);
                    switch (this.request.method) {
                        case HTTP_METHOD.Head:
                        case HTTP_METHOD.Options:
                            return this.endResponse_(contentType, false);
                    }
                    switch (result.statusCode) {
                        case HTTP_STATUS_CODE.NoContent:
                        case HTTP_STATUS_CODE.NotModified:
                            return this.endResponse_(contentType, false);
                    }
                    if (headerSetByUser) {
                        return this.endResponse_(contentType);
                    }
                    const negotiateMimeType = this.getContentTypeFromNegotiation(contentType) as MIME_TYPE;
                    if (negotiateMimeType != null) {
                        this.endResponse_(negotiateMimeType);
                    }
                    else {
                        return this.onNotAcceptableRequest();
                    }
                }
                break;
            case HTTP_RESULT_TYPE.Custom:
                return this.handleCustomResult_();
            case HTTP_RESULT_TYPE.FormattedResult:
                return this.handleFormatResult_();
        }
    }
}
