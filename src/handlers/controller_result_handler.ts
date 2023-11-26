
import { MIME_TYPE, HTTP_STATUS_CODE, HTTP_RESULT_TYPE } from "../enums";
import { FileHandler } from "./file_handler";
import * as path from 'path';
import { textResult } from "../helpers";
import { promiseResolve } from "../utils";
import { IHttpResult, IFileResultInfo } from "../interfaces";

export class ControllerResultHandler extends FileHandler {

    private handleRedirectResult_() {
        this.response.writeHead(this.controllerResult.statusCode || HTTP_STATUS_CODE.Ok,
            { 'Location': (this.controllerResult as IHttpResult).responseData });
        this.response.end();
        return promiseResolve(null);
    }

    private handleFileResult_() {
        const result = this.controllerResult as IHttpResult;
        const fileResult = result.responseData as IFileResultInfo;
        const parsedPath = path.parse(fileResult.filePath);
        if (fileResult.shouldDownload === true) {
            const fileName = fileResult.alias == null ? parsedPath.name : fileResult.alias;
            this.response.setHeader(
                "content-disposition",
                `attachment;filename=${fileName}${parsedPath.ext}`
            );
        }
        return this.handleFileRequestFromAbsolutePath(fileResult.filePath, parsedPath.ext);
    }

    onTerminationFromWall(result: IHttpResult) {
        this.controllerResult = result;
        return this.handleFinalResult_();
    }

    private handleFinalResult_() {
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