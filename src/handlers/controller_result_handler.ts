
import { HttpResult, HttpFormatResult } from "../types";
import { __SetCookie, __ContentType } from "../constant";
import { MIME_TYPE, HTTP_STATUS_CODE } from "../enums";
import { FileHandler } from "./file_handler";
import * as path from 'path';
import { XmlHelper, textResult } from "../helpers";

export class ControllerResultHandler extends FileHandler {
    private controllerResult_: HttpResult;

    private getDataBasedOnMimeType_(mimeType: MIME_TYPE) {
        switch (mimeType) {
            case MIME_TYPE.Json:
            case MIME_TYPE.Text:
            case MIME_TYPE.Html:
                if (typeof this.controllerResult_.responseData === 'object') {
                    return JSON.stringify(this.controllerResult_.responseData);
                }
                break;
            case MIME_TYPE.Xml:
                if (typeof this.controllerResult_.responseData === 'object') {
                    return XmlHelper.fromJsToXml(this.controllerResult_.responseData);
                }
                break;
        }
        return this.controllerResult_.responseData;
    }

    private endResponse_(negotiateMimeType: MIME_TYPE) {
        let data;
        try {
            data = this.getDataBasedOnMimeType_(negotiateMimeType);
        }
        catch (ex) {
            this.onErrorOccured(ex);
            return;
        }

        this.response.writeHead(this.controllerResult_.statusCode || HTTP_STATUS_CODE.Ok,
            { [__ContentType]: negotiateMimeType });
        this.response.end(data);
    }

    private handleRedirectResult_() {
        this.response.setHeader('Location', this.controllerResult_.responseData);
        this.response.writeHead(this.controllerResult_.statusCode || HTTP_STATUS_CODE.Ok,
            { 'Location': this.controllerResult_.responseData });
        this.response.end();
    }

    private handleFormatResult_() {
        const negotiateMimeType = this.getContentTypeFromNegotiationHavingMultipleTypes(Object.keys((this.controllerResult_ as HttpFormatResult).responseFormat) as MIME_TYPE[]);
        const key = Object.keys((this.controllerResult_ as HttpFormatResult).responseFormat).find(qry => qry === negotiateMimeType);
        if (key != null) {
            this.controllerResult_.responseData = (this.controllerResult_ as HttpFormatResult).responseFormat[key]();
            this.endResponse_(negotiateMimeType);
        }
        else {
            this.onNotAcceptableRequest();
        }
    }

    private handleFileResult_() {
        const result = this.controllerResult_;
        const parsedPath = path.parse(result.file.filePath);
        if (result.file.shouldDownload === true) {
            const fileName = result.file.alias == null ? parsedPath.name : result.file.alias;
            this.response.setHeader(
                "Content-Disposition",
                `attachment;filename=${fileName}${parsedPath.ext}`
            );
        }
        this.handleFileRequestFromAbsolutePath(result.file.filePath, parsedPath.ext);
    }

    onResultFromWall(result: HttpResult | HttpFormatResult) {
        this.handleResponseResult_(result);
    }

    private handleResponseResult_(result: HttpResult | HttpFormatResult) {
        result = result || textResult("");
        this.controllerResult_ = result as HttpResult;

        ((this.cookieManager as any).responseCookie_ as string[]).forEach(value => {
            this.response.setHeader(__SetCookie, value);
        });

        if ((result as HttpResult).shouldRedirect == null || (result as HttpResult).shouldRedirect === false) {
            if ((result as HttpFormatResult).responseFormat == null) {
                if ((result as HttpResult).file == null) {
                    const contentType = (result as HttpResult).contentType || MIME_TYPE.Text;
                    const negotiateMimeType = this.getContentTypeFromNegotiation(contentType) as MIME_TYPE;
                    if (negotiateMimeType != null) {
                        this.endResponse_(negotiateMimeType);
                    }
                    else {
                        this.onNotAcceptableRequest();
                    }
                }
                else {
                    this.handleFileResult_();
                }
            }
            else {
                this.handleFormatResult_();
            }
        }
        else {
            this.handleRedirectResult_();
        }
    }

    async  onResultEvaluated(result: HttpResult | HttpFormatResult) {
        try {
            await this.runWallOutgoing();
        } catch (ex) {
            this.onErrorOccured(ex);
            return;
        }
        this.handleResponseResult_(result);
    }
}