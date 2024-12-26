import { FileManager } from "../models";
import { Guard } from "../abstracts";
import { HTTP_METHOD, HTTP_STATUS_CODE, MIME_TYPE } from "../enums";
import { JsonHelper, promise, textResult } from "../helpers";
import ContentType from "fast-content-type-parse";
import * as QueryString from 'querystring';
import * as Multiparty from "multiparty";
import { IMultiPartParseResult } from "../interfaces";
import * as http from "http";

// empty file manager is used when there is no file in the body
// this is optimized to avoid creating new file manager object every time
// tslint:disable-next-line
let emptyFileManager: FileManager = null as any;

export class PostDataEvaluatorGuard extends Guard {

    async check() {
        try {
            const postResult = await this.handlePostData();
            const componentProps = this['componentProp_'];
            componentProps.file = postResult[0];
            componentProps.body = postResult[1];
        } catch (error) {
            return textResult(error.message || `Invalid body data. Check your data format.`, HTTP_STATUS_CODE.BadRequest);
        }
    }

    async handlePostData() {
        switch (this.request.method) {
            case HTTP_METHOD.Get:
            case HTTP_METHOD.Delete:
            case HTTP_METHOD.Head:
                return [emptyFileManager, {}];
        }
        return this.parsePostData();
    }

    private getPostRawData_(): Promise<string> {
        const body = [];
        return promise((res, rej) => {
            (this.request as http.IncomingMessage).on('data', (chunk) => {
                body.push(chunk);
            }).on('end', () => {
                const bodyBuffer = Buffer.concat(body);
                res(bodyBuffer.toString());
            }).on("error", function (err) {
                rej(err);
            });
        });
    }

    private parseMultiPartData_(): Promise<IMultiPartParseResult> {
        return promise((res, rej) => {
            new Multiparty.Form().parse(this.request as http.IncomingMessage, (err, fields, files) => {
                if (err) {
                    rej(err);
                }
                else {
                    const result: IMultiPartParseResult = {
                        field: {},
                        file: {}
                    };
                    for (const field in fields) {
                        result.field[field] = fields[field].length === 1 ? fields[field][0] : fields[field];
                    }
                    for (const file in files) {
                        result.file[file] = files[file].length === 1 ? files[file][0] : files[file];
                    }
                    res(result);
                }
            });
        });
    }

    async parsePostData() {
        let contentType = this.request.headers["content-type"];
        if (contentType != null) {
            contentType = ContentType.parse(contentType).type;
        }
        if (contentType === MIME_TYPE.FormMultiPart) {
            const multipartyResult = await this.parseMultiPartData_();
            return [new FileManager(multipartyResult.file), multipartyResult.field];
        }
        else {
            let postData;
            const bodyDataAsString = await this.getPostRawData_();
            switch (contentType) {
                case MIME_TYPE.Json:
                    postData = JsonHelper.parse(bodyDataAsString);
                    break;
                case MIME_TYPE.Text:
                case MIME_TYPE.Html:
                    postData = bodyDataAsString; break;
                case MIME_TYPE.FormUrlEncoded:
                    postData = QueryString.parse(bodyDataAsString); break;
                case MIME_TYPE.Xml: {
                    const xmlParser = new (this['componentProp_'].global as any).xmlParser();
                    xmlParser['componentProp_'] = this['componentProp_'];
                    postData = xmlParser.parse(bodyDataAsString);
                }
                    break;
                default:
                    postData = {};
            }
            return [emptyFileManager, postData];
        }
    }

    static initEmptyFileManager() {
        emptyFileManager = new FileManager({});
    }
}


