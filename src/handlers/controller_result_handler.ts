
import { HttpResult, HttpFormatResult } from "../types";
import { __SetCookie, __ContentType } from "../constant";
import { MIME_TYPE, HTTP_STATUS_CODE } from "../enums";
import { FileHandler } from "./file_handler";
import * as path from 'path';
import { textResult, getResultBasedOnMiMe } from "../helpers";

export class ControllerResultHandler extends FileHandler {


    private endResponse_(negotiateMimeType: MIME_TYPE) {
        let data;
        try {
            data = getResultBasedOnMiMe(negotiateMimeType,
                (this.controllerResult_ as HttpResult).responseData
                , (type: MIME_TYPE) => {
                    negotiateMimeType = type;
                }
            );
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
        // this.response.setHeader('Location', this.controllerResult_.responseData);
        this.response.writeHead(this.controllerResult_.statusCode || HTTP_STATUS_CODE.Ok,
            { 'Location': (this.controllerResult_ as HttpResult).responseData });
        this.response.end();
    }

    private handleFormatResult_() {
        const negotiateMimeType = this.getContentTypeFromNegotiationHavingMultipleTypes(Object.keys((this.controllerResult_ as HttpFormatResult).responseFormat) as MIME_TYPE[]);
        const key = Object.keys((this.controllerResult_ as HttpFormatResult).responseFormat).find(qry => qry === negotiateMimeType);
        if (key != null) {
            (this.controllerResult_ as HttpResult).responseData = (this.controllerResult_ as HttpFormatResult).responseFormat[key]();
            this.endResponse_(negotiateMimeType);
        }
        else {
            this.onNotAcceptableRequest();
        }
    }

    private handleFileResult_() {
        const result = this.controllerResult_ as HttpResult;
        const parsedPath = path.parse(result.file.filePath);
        if (result.file.shouldDownload === true) {
            const fileName = result.file.alias == null ? parsedPath.name : result.file.alias;
            this.response.setHeader(
                "content-disposition",
                `attachment;filename=${fileName}${parsedPath.ext}`
            );
        }
        this.handleFileRequestFromAbsolutePath(result.file.filePath, parsedPath.ext);
    }

    onTerminationFromWall(result: HttpResult | HttpFormatResult) {
        this.controllerResult_ = result;
        this.handleFinalResult_();
    }

    private handleFinalResult_() {
        const result = this.controllerResult_;
        ((this.cookieManager as any).responseCookie_ as string[]).forEach(value => {
            this.response.setHeader(__SetCookie, value);
        });

        if ((result as HttpResult).shouldRedirect === true) {
            this.handleRedirectResult_();
        }
        else {
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
    }


    async  onResultFromController(result: HttpResult | HttpFormatResult) {
        this.controllerResult_ = result || textResult("");
        try {
            await this.runWallOutgoing();
        } catch (ex) {
            this.onErrorOccured(ex);
            return;
        }
        this.handleFinalResult_();
    }
}