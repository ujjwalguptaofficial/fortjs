
import { HttpResult } from "./types/http_result";
import { Set__Cookie, Content__Type } from "./constant";
import { MIME_TYPE } from "./enums/mime_type";
import * as jsontoxml from "jsontoxml";
import { HTTP_STATUS_CODE } from "./enums/http_status_code";
import { FileHandler } from "./file_handler";
import * as path from 'path';
import { isEnvDev } from "./helpers/is_env_dev";

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
            { [Content__Type]: negotiateMimeType });
        this.response.end(this.getDataBasedOnMimeType_(negotiateMimeType));
    }

    async onResultEvaluated(result: HttpResult) {
        //console.log("result evaluated", result);
        if (result == null) {
            throw `no result is returned for the request url -${this.request.url} & method - ${this.request.method}`;
        }

        //await this.runWallOutgoing();
        this.controllerResult_ = result;
        if (this.cookieManager != null) {
            ((this.cookieManager as any).responseCookie_ as string[]).forEach(value => {
                this.response.setHeader(Set__Cookie, value);
            });
        }
        if (result.shouldRedirect == null || result.shouldRedirect == false) {
            if (result.responseFormat == null) {
                const contentType = result.contentType || MIME_TYPE.Text;
                const negotiateMimeType = this.getContentTypeFromNegotiation(contentType) as MIME_TYPE;
                if (negotiateMimeType != null) {
                    if (result.file == null) {
                        this.finishResponse_(negotiateMimeType);
                    }
                    else {
                        if (result.file.shouldDownload === true) {
                            const parsedPath = path.parse(result.file.filePath);
                            const fileName = result.file.alias == null ? parsedPath.name : result.file.alias;
                            this.response.setHeader(
                                "Content-Disposition",
                                `attachment;filename=${fileName}.${parsedPath.ext}`
                            )
                        }
                        this.handleFileRequest(result.file.filePath, negotiateMimeType);
                    }
                }
                else {
                    this.onNotAcceptableRequest();
                }
            }
            else {
                const negotiateMimeType = this.getContentTypeFromNegotiationHavingMultipleTypes(Object.keys(result.responseFormat) as MIME_TYPE[]);
                const key = Object.keys(result.responseFormat).find(qry => qry === negotiateMimeType);
                if (key != null) {
                    this.controllerResult_.responseData = result.responseFormat[key]();
                    this.finishResponse_(negotiateMimeType);
                }
                else {
                    this.onNotAcceptableRequest();
                }
            }

        }
        else {
            this.response.setHeader('Location', result.responseData);
            this.response.writeHead(result.statusCode || HTTP_STATUS_CODE.Ok,
                { 'Location': result.responseData });
            this.response.end();
        }
    }
}