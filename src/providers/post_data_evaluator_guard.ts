import { FileManager, HttpFile } from "../models";
import { Guard } from "../abstracts";
import { HTTP_METHOD, HTTP_STATUS_CODE, MIME_TYPE } from "../enums";
import { JsonHelper, promise, textResult } from "../helpers";
import ContentType from "fast-content-type-parse";
import * as QueryString from 'querystring';
// import * as Multiparty from "multiparty";
import { IMultiPartParseResult } from "../interfaces";
import * as http from "http";
import * as busboy from "busboy";


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
        console.log('parsing multipart data');
        return promise((res, rej) => {
            try {
                const bb = busboy({ headers: this.request.headers });
                const result: IMultiPartParseResult = {
                    field: {},
                    file: {}
                };
                bb.on('field', (fieldname, val) => {
                    console.log('field', fieldname, val);
                    result.field[fieldname] = val;
                });
                bb.on('file', (fieldname, file, fileDetails) => {
                    console.log('file', fieldname, fileDetails);
                    const fileInfo: HttpFile = {
                        fieldName: fieldname,
                        originalFilename: fileDetails.filename,
                        stream: file,
                    };
                    result.file[fieldname] = {
                        fileInfo,
                        file
                    } as any;
                    console.log('file added', result.file);
                    // file.resume();
                });
                bb.on('finish', () => {
                    console.log('file parsed', result);
                    res(result);
                });
                this.request['pipe'](bb);
                console.log('piped');
            }
            catch (ex) {
                rej(ex);
            }
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


