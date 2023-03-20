import { ControllerResultHandler } from "./controller_result_handler";
import { promise, JsonHelper } from "../helpers";
import { __ContentType } from "../constant";
import { MIME_TYPE } from "../enums";
import * as ContentType from "content-type";
import * as QueryString from 'querystring';
import * as Multiparty from "multiparty";
import { MultiPartParseResult } from "../types";
import { FileManager } from "../models";
import { FortGlobal } from "../fort_global";


export class PostHandler extends ControllerResultHandler {
    protected body: any;
    protected file: FileManager;

    private getPostRawData_(): Promise<string> {
        const body = [];
        return promise((res, rej) => {
            this.request.on('data', (chunk) => {
                body.push(chunk);
            }).on('end', () => {
                const bodyBuffer = Buffer.concat(body);
                res(bodyBuffer.toString());
            }).on("error", function (err) {
                rej(err);
            });
        });
    }

    private parseMultiPartData_(): Promise<MultiPartParseResult> {
        return promise((res, rej) => {
            new Multiparty.Form().parse(this.request, (err, fields, files) => {
                if (err) {
                    rej(err);
                }
                else {
                    const result: MultiPartParseResult = {
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

    protected parsePostData() {
        let contentType = this.request.headers[__ContentType] || this.request.headers["content-type"];
        if (contentType != null) {
            contentType = ContentType.parse(contentType as string).type;
        }
        if (contentType === MIME_TYPE.FormMultiPart) {
            return this.parseMultiPartData_().then(result => {
                this.file = new FileManager(result.file);
                return (result.field);
            });
        }
        else {
            let postData;
            this.file = new FileManager({});
            return this.getPostRawData_().then(bodyDataAsString => {
                switch (contentType) {
                    case MIME_TYPE.Json:
                        postData = JsonHelper.parse(bodyDataAsString);
                        break;
                    case MIME_TYPE.Text:
                    case MIME_TYPE.Html:
                        postData = bodyDataAsString; break;
                    case MIME_TYPE.FormUrlEncoded:
                        postData = QueryString.parse(bodyDataAsString); break;
                    case MIME_TYPE.Xml:
                        postData = new (FortGlobal as any).xmlParser().parse(bodyDataAsString);
                        break;
                    default:
                        postData = {};
                }
                return postData;
            });
        }
    }
}