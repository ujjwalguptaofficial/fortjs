import { Controller, DefaultWorker, HttpFormatResult, HttpResult, HTTP_STATUS_CODE, MIME_TYPE, Worker, jsonResult, Route, downloadResult, textResult, HTTP_METHOD, fileResult } from "fortjs";
import * as path from "path";


export class RandomController extends Controller {

    @DefaultWorker()
    async format() {
        const result = {
            statusCode: HTTP_STATUS_CODE.Ok,
            responseFormat: {
                [MIME_TYPE.Json]: () => {
                    return { result: "hello world" }
                },
                [MIME_TYPE.Html]: () => {
                    return "<p>hello world</p>"
                },
                [MIME_TYPE.Text]: () => {
                    return "hello world"
                }
            }
        } as HttpFormatResult;
        return result;
    }

    @Worker()
    async form() {
        return jsonResult(this.body);
    }

    @Worker()
    @Route("/throw")
    async throwTest() {
        throw "throw test";
    }


    @Worker(HTTP_METHOD.Get)
    @Route('/download')
    async download() {
        const pathLocation = path.join(__dirname, "../contents/index.html");
        return downloadResult(pathLocation);
    }


    @Worker(HTTP_METHOD.Post)
    @Route('/download')
    async downloadWithAlias() {
        const pathLocation = path.join(__dirname, "../contents/index.html");
        return downloadResult(pathLocation, 'alias');
    }

    @Worker()
    @Route('/file')
    async getFile() {
        const pathLocation = path.join(__dirname, "../contents/JsStore_16_16.png");
        return fileResult(pathLocation);
    }


    @Worker()
    async null() {

    }

    @Worker()
    @Route("/status-override")
    async statusCodeOverrideTestUsingWall() {
        return textResult("ok", 202);
    }
}