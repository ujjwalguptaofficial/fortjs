import { ControllerHandler } from "./controller_handler";
import { promise } from "../helpers/promise";
import { __ContentType } from "../constant";
import { MIME_TYPE } from "../enums/mime_type";
import * as ContentType from "content-type";
import * as QueryString from 'querystring';
import * as Multiparty from "multiparty";
import { MultiPartParseResult } from "../types/multi_part_parse_result";
import { HttpFile } from "../models/http_file";
import { FileManager } from "../models/file_manager";
export class PostHandler extends ControllerHandler {
    protected body: any;
    protected file: FileManager = new FileManager();

    protected getPostRawData_() {
        const body = [];
        return promise((res, rej) => {
            this.request.on('data', (chunk) => {
                body.push(chunk);
            }).on('end', () => {
                const bodyBuffer = Buffer.concat(body);
                res(bodyBuffer);
            });
        });
    }

    private parseMultiPartData_(): Promise<MultiPartParseResult> {
        return new Promise((res, rej) => {
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

    protected async parsePostData() {
        try {
            let postData;

            let contentType = this.request.headers[__ContentType] || this.request.headers["content-type"];
            if (contentType != null) {
                contentType = ContentType.parse(contentType as string).type;
            }
            if (contentType === MIME_TYPE.FormMultiPart) {
                const result = await this.parseMultiPartData_();
                postData = result.field;
                this.file.files = result.file;
            }
            else {
                const bodyBuffer = await this.getPostRawData_();
                switch (contentType) {
                    case MIME_TYPE.Json:
                        try {
                            postData = JSON.parse(bodyBuffer.toString());
                        }
                        catch (ex) {
                            /* tslint:disable-next-line */
                            throw "Post data is invalid";
                        }
                        break;
                    case MIME_TYPE.Text:
                    case MIME_TYPE.Html:
                        postData = bodyBuffer.toString(); break;
                    case MIME_TYPE.FormUrlEncoded:
                        postData = QueryString.parse(bodyBuffer.toString()); break;
                    default:
                        postData = {};
                }
            }

            return postData;
        }
        catch (ex) {
            throw ex;
        }
    }
}