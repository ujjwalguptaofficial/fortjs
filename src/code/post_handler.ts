import { ControllerHandler } from "./controller_handler";
import { promise } from "./helpers/promise";
import { __ContentType } from "./constant";
import { MIME_TYPE } from "./enums/mime_type";
import * as ContentType from "content-type";
import * as QueryString from 'querystring';

export class PostHandler extends ControllerHandler {
    protected body: any;
    protected files = {};

    protected getPostRawData_() {
        const body = [];
        return promise((res, rej) => {
            this.request.on('data', (chunk) => {
                body.push(chunk);
            }).on('end', () => {
                const bodyBuffer = Buffer.concat(body);
                res(bodyBuffer);
            });
        })
    }

    protected async handlePostData() {
        try {
            let postData;
            const bodyBuffer = await this.getPostRawData_();
            let contentType = this.request.headers[__ContentType];
            if (contentType != null) {
                contentType = ContentType.parse(contentType).type;
            }
            switch (contentType) {
                case MIME_TYPE.Json:
                    try {
                        postData = JSON.parse(bodyBuffer.toString());
                    }
                    catch (ex) {
                        throw "Post data is invalid";
                    }
                    break;
                case MIME_TYPE.Text:
                case MIME_TYPE.Html:
                    postData = bodyBuffer.toString(); break;
                case MIME_TYPE.FormUrlEncoded:
                    postData = QueryString.parse(bodyBuffer.toString()); break;
            }
            return postData;
        }
        catch (ex) {
            throw ex;
        }
    }
}