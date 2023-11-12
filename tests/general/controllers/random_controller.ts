import { Controller, defaultWorker, multiTypeResult, MIME_TYPE, worker, jsonResult, route, downloadResult, textResult, HTTP_METHOD, fileResult } from "fortjs";
import * as path from "path";


export class RandomController extends Controller {

    @defaultWorker()
    async format() {
        return multiTypeResult({
            [MIME_TYPE.Json]: () => {
                return { result: "hello world" }
            },
            [MIME_TYPE.Html]: () => {
                return "<p>hello world</p>"
            },
            [MIME_TYPE.Text]: () => {
                return "hello world"
            }
        });
    }

    @worker()
    async form() {
        return jsonResult(this.body);
    }

    @worker()
    @route("/throw")
    async throwTest() {
        throw "throw test";
    }


    @worker(HTTP_METHOD.Get)
    @route('/download')
    async download() {
        const pathLocation = path.join(__dirname, "../contents/index.html");
        return downloadResult(pathLocation);
    }


    @worker(HTTP_METHOD.Post)
    @route('/download')
    async downloadWithAlias() {
        const pathLocation = path.join(__dirname, "../contents/index.html");
        return downloadResult(pathLocation, 'alias');
    }

    @worker()
    @route('/file')
    async getFile() {
        const pathLocation = path.join(__dirname, "../contents/JsStore_16_16.png");
        return fileResult(pathLocation);
    }


    @worker()
    async null() {

    }

    @worker()
    @route("/status-override")
    async statusCodeOverrideTestUsingWall() {
        return textResult("ok", 202);
    }
}