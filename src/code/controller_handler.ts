
import { HttpResult } from "./types/http_result";
import { Set__Cookie, Content__Type } from "./constant";
import { MIME_TYPE } from "./enums/mime_type";
import * as jsontoxml from "jsontoxml";
import { HTTP_STATUS_CODE } from "./enums/http_status_code";
import { FileHandler } from "./file_handler";
import * as path from 'path';
import { Wall } from "./abstracts/wall";

export class ControllerHandler extends FileHandler {

    protected wallInstances: Wall[];
    private controllerResult_: HttpResult;
    private negotiateMimeType_: MIME_TYPE;


    private getDataBasedOnMimeType_() {
        switch (this.negotiateMimeType_) {
            case MIME_TYPE.Json:
                if (typeof this.controllerResult_.responseData === 'object') {
                    return JSON.stringify(this.controllerResult_.responseData);
                }
                return this.controllerResult_.responseData;
            case MIME_TYPE.Xml:
                if (typeof this.controllerResult_.responseData === 'object') {
                    return jsontoxml({
                        document: this.controllerResult_.responseData
                    },{
                        xmlHeader:true
                    });
                }
                return this.controllerResult_.responseData;
            default:
                return this.controllerResult_.responseData;

        }
    }

    private runWallOutgoing_() {
        this.wallInstances.forEach(wallObj => {
            if (wallObj.onOutgoing != null) {
                wallObj.onOutgoing();
            }
        });
    }

    onControllerResult(result: HttpResult) {
        this.runWallOutgoing_();
        this.controllerResult_ = result;
        if (this.cookieManager != null) {
            ((this.cookieManager as any).responseCookie_ as string[]).forEach(value => {
                this.response.setHeader(Set__Cookie, value);
            });
        }
        if (result.shouldRedirect == null || result.shouldRedirect == false) {

            const contentType = result.contentType || MIME_TYPE.Text;
            this.negotiateMimeType_ = this.getContentTypeFromNegotiation(contentType) as MIME_TYPE;
            if (this.negotiateMimeType_ != null) {
                if (result.file == null) {
                    if (result.responseFormat == null) {
                        this.response.writeHead(result.statusCode || HTTP_STATUS_CODE.Ok,
                            { [Content__Type]: this.negotiateMimeType_ });
                        this.response.end(this.getDataBasedOnMimeType_());
                    }
                    else {
                        const key = Object.keys(result.responseFormat).find(qry => qry === this.negotiateMimeType_);
                        if (key != null) {
                            this.response.writeHead(result.statusCode || HTTP_STATUS_CODE.Ok,
                                { [Content__Type]: this.negotiateMimeType_ });
                            this.response.end(result.responseFormat[key]());
                        }
                        else {
                            this.onNotAcceptableRequest();
                        }
                    }
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
                    this.handleFileRequest(result.file.filePath, this.negotiateMimeType_);
                }
            }
            else {
                this.onNotAcceptableRequest();
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