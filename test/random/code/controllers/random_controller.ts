import { Controller, declareAsController, defaultAction, HttpFormatResult, HttpResult, HTTP_STATUS_CODE, MIME_TYPE, action, jsonResult, route, downloadResult, textResult } from "fortjs";
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
    @route("throw")
    async throwTest() {
        throw "throw test";
    }


    @action()
    async download() {
        const pathLocation = path.join(__dirname, "../contents/index.html");
        console.log(pathLocation);
        return downloadResult(pathLocation);
        // console.log(__dirname);
        //return textResult(__dirname);
    }
}