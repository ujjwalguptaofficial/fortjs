
import { HttpResult, HttpFormatResult } from "../types";
import { __SetCookie } from "../constant";
import { MIME_TYPE, HTTP_STATUS_CODE } from "../enums";
import { FileHandler } from "./file_handler";
import * as path from 'path';
import { textResult } from "../helpers";

export class ControllerResultHandler extends FileHandler {

    private handleRedirectResult_() {
        this.response.writeHead(this.controllerResult.statusCode || HTTP_STATUS_CODE.Ok,
            { 'Location': (this.controllerResult as HttpResult).responseData });
        this.response.end();
    }

    private handleFileResult_() {
        const result = this.controllerResult as HttpResult;
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
        this.controllerResult = result;
        this.handleFinalResult_();
    }

    private handleFinalResult_() {
        const result = this.controllerResult;
        ((this.cookieManager as any).responseCookie_ as string[]).forEach(value => {
            this.response.setHeader(__SetCookie, value);
        });

        if ((result as HttpResult).shouldRedirect === true) {
            return this.handleRedirectResult_();
        }

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

    onResultFromComponent(result: HttpResult | HttpFormatResult) {
        this.controllerResult = result || textResult("");
        return this.runWallOutgoing().then(() => {
            this.handleFinalResult_();
        });
    }
}