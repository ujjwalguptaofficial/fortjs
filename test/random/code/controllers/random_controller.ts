import { Controller, declareAsController, defaultAction, HttpFormatResult, HttpResult, HTTP_STATUS_CODE, MIME_TYPE } from "fortjs";

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
}