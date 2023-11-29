import { HTTP_STATUS_CODE, MIME_TYPE, HTTP_METHOD, HTTP_RESULT_TYPE } from "../enums";
import { CONTENT_TYPE, SET_COOKIE, FORT_GLOBAL } from "../constants";
import * as Negotiator from "negotiator";
import { IComponentProp, IException, IFileResultInfo, IHttpResult } from "../interfaces";
import { textResult, getResultBasedOnMiMe } from "../helpers";
import { HttpFormatResult } from "../types";
import { parse } from "path";
import { FileHandler } from "./file_handler";

export class RequestHandlerHelper {
    protected componentProps: IComponentProp;

    protected controllerResult: IHttpResult;

    get request() {
        return this.componentProps.request;
    }

    get response() {
        return this.componentProps.response;
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
        return new FORT_GLOBAL.errorHandler().onBadRequest(error).then(data => {
            return this.onResultFromError_(data);
        });
    }

    protected onForbiddenRequest() {
        return new FORT_GLOBAL.errorHandler().onForbiddenRequest().then(data => {
            return this.onResultFromError_(data);
        });
    }

    protected onNotAcceptableRequest() {
        return new FORT_GLOBAL.errorHandler().onNotAcceptableRequest().then(data => {
            return this.onResultFromError_(data);
        });
    }

    public onNotFound() {
        return new FORT_GLOBAL.errorHandler().onNotFound(this.request.url).then(data => {
            return this.onResultFromError_(data);
        });
    }

    protected onMethodNotAllowed(allowedMethods: HTTP_METHOD[]) {
        return new FORT_GLOBAL.errorHandler().onMethodNotAllowed().then(data => {
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
        if (typeof error === 'string') {
            error = {
                message: error
            } as IException;
        }
        return new FORT_GLOBAL.errorHandler().onServerError(error).then(data => {
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
        return this.onResultFromError_(textResult(""));
    }

    private onResultFromError_(result: IHttpResult) {
        this.controllerResult = result;
        this.returnResultFromError_();
    }

    setCookie() {
        if (FORT_GLOBAL.shouldParseCookie === false) return;
        (this.componentProps.cookie['responseCookie_']).forEach(value => {
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

    protected endResponse_(negotiateMimeType: MIME_TYPE) {

        const data = getResultBasedOnMiMe(negotiateMimeType,
            (this.controllerResult).responseData
            , (type: MIME_TYPE) => {
                negotiateMimeType = type;
            }
        );

        if (this.response.headersSent) {
            console.trace("Request is finished, but triggered again");
            return;
        }

        this.response.writeHead(this.controllerResult.statusCode || HTTP_STATUS_CODE.Ok,
            { [CONTENT_TYPE]: negotiateMimeType });
        this.response.end(data);
    }

    private handleRedirectResult_() {
        this.response.writeHead(this.controllerResult.statusCode || HTTP_STATUS_CODE.Ok,
            { 'Location': (this.controllerResult as IHttpResult).responseData });
        this.response.end();
        return null;
    }

    private handleFileResult_() {
        const result = this.controllerResult as IHttpResult;
        const fileResult = result.responseData as IFileResultInfo;
        const parsedPath = parse(fileResult.filePath);
        if (fileResult.shouldDownload === true) {
            const fileName = fileResult.alias == null ? parsedPath.name : fileResult.alias;
            this.response.setHeader(
                "content-disposition",
                `attachment;filename=${fileName}${parsedPath.ext}`
            );
        }
        const fileHandler = new FileHandler(this as any);
        return fileHandler.handleFileRequestFromAbsolutePath(
            fileResult.filePath, parsedPath.ext
        );
    }

    protected handleFinalResult_() {
        const result: IHttpResult = this.controllerResult;
        this.setCookie();

        switch (result.type) {
            case HTTP_RESULT_TYPE.Default:
                {
                    const contentType = result.contentType || MIME_TYPE.Text;
                    const negotiateMimeType = this.getContentTypeFromNegotiation(contentType) as MIME_TYPE;
                    if (negotiateMimeType != null) {
                        this.endResponse_(negotiateMimeType);
                    }
                    else {
                        return this.onNotAcceptableRequest();
                    }
                }
                break;
            case HTTP_RESULT_TYPE.Redirect:
                return this.handleRedirectResult_();
            case HTTP_RESULT_TYPE.File:
                return this.handleFileResult_();
            case HTTP_RESULT_TYPE.FormattedResult:
                return this.handleFormatResult_();
        }
    }

    onResultFromComponent(result: IHttpResult) {
        this.controllerResult = result || textResult("");
        // return () => {
        return this.handleFinalResult_;
        // }
    }

}