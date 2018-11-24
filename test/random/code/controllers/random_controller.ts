import { Controller, declareAsController, defaultAction, HttpFormatResult, HttpResult, HTTP_STATUS_CODE, MIME_TYPE, action, jsonResult, route, downloadResult, textResult, HTTP_METHOD, fileResult } from "fortjs";
import * as path from "path";

@declareAsController('random')
export class RandomController extends Controller {
    @defaultAction()
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

    @action()
    async form() {
        return jsonResult(this.body);
    }

    @action()
    @route("/throw")
    async throwTest() {
        throw "throw test";
    }


    @action([HTTP_METHOD.Get])
    @route('/download')
    async download() {
        const pathLocation = path.join(__dirname, "../contents/index.html");
        return downloadResult(pathLocation);
    }


    @action([HTTP_METHOD.Post])
    @route('/download')
    async downloadWithAlias() {
        const pathLocation = path.join(__dirname, "../contents/index.html");
        return downloadResult(pathLocation, 'alias');
    }

    @action()
    async file() {
        const pathLocation = path.join(__dirname, "../contents/JsStore_16_16.png");
        return fileResult(pathLocation);
    }
}