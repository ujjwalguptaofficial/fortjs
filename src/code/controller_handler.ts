
import { HttpResult } from "./types/http_result";
import { __SetCookie, __ContentType } from "./constant";
import { MIME_TYPE } from "./enums/mime_type";
import * as jsontoxml from "jsontoxml";
import { HTTP_STATUS_CODE } from "./enums/http_status_code";
import { FileHandler } from "./file_handler";
import * as path from 'path';

export class ControllerHandler extends FileHandler {
    private controllerResult_: HttpResult;

    private getDataBasedOnMimeType_(mimeType: MIME_TYPE) {
        switch (mimeType) {
            case MIME_TYPE.Json:
                if (typeof this.controllerResult_.responseData === 'object') {
                    return JSON.stringify(this.controllerResult_.responseData);
                }
                return this.controllerResult_.responseData;
            case MIME_TYPE.Xml:
                if (typeof this.controllerResult_.responseData === 'object') {
                    return jsontoxml({
                        document: this.controllerResult_.responseData
                    }, {
                            xmlHeader: true
                        });
                }
                return this.controllerResult_.responseData;
            default:
                return this.controllerResult_.responseData;

        }
    }

    private finishResponse_(negotiateMimeType: MIME_TYPE) {
        this.response.writeHead(this.controllerResult_.statusCode || HTTP_STATUS_CODE.Ok,
            { [__ContentType]: negotiateMimeType });
        this.response.end(this.getDataBasedOnMimeType_(negotiateMimeType));
    }

    private handleRedirectResult_() {
        this.response.setHeader('Location', this.controllerResult_.responseData);
        this.response.writeHead(this.controllerResult_.statusCode || HTTP_STATUS_CODE.Ok,
            { 'Location': this.controllerResult_.responseData });
        this.response.end();
    }

    private handleFormatResult_() {
        const negotiateMimeType = this.getContentTypeFromNegotiationHavingMultipleTypes(Object.keys(this.controllerResult_.responseFormat) as MIME_TYPE[]);
        const key = Object.keys(this.controllerResult_.responseFormat).find(qry => qry === negotiateMimeType);
        if (key != null) {
            this.controllerResult_.responseData = this.controllerResult_.responseFormat[key]();
            this.finishResponse_(negotiateMimeType);
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

    async onResultEvaluated(result: HttpResult) {
        await this.runWallOutgoing();
        this.controllerResult_ = result;
        if (this.cookieManager != null) {
            ((this.cookieManager as any).responseCookie_ as string[]).forEach(value => {
                this.response.setHeader(__SetCookie, value);
            });
        }
        if (result.shouldRedirect == null || result.shouldRedirect === false) {
            if (result.responseFormat == null) {
                if (result.file == null) {
                    const contentType = result.contentType || MIME_TYPE.Text;
                    const negotiateMimeType = this.getContentTypeFromNegotiation(contentType) as MIME_TYPE;
                    if (negotiateMimeType != null) {
                        this.finishResponse_(negotiateMimeType);
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
}