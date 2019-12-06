import { Controller, Route, ExpectQuery, Worker, textResult, HTTP_METHOD, ExpectBody } from "fortjs";

export class ExpectController extends Controller {

    @Route('/convert')
    @ExpectQuery({ id: 0, name: "" })
    @Worker([HTTP_METHOD.Get])
    async normalExpectConvert() {
        const queryLength = Object.keys(this.query).length;
        const output = queryLength === 2 ? "ok" : "not_ok";
        if (this.query.id === 0 && this.query.name === "") {
            return textResult(output);
        }
        return textResult("", 400);

    }

    @Route('/convert')
    @ExpectBody({ id: 0, name: "" })
    @Worker([HTTP_METHOD.Post])
    async normalExpectConvertBody() {
        console.log('body', this.body)
        const queryLength = Object.keys(this.body).length;
        const output = queryLength === 2 ? "ok" : "not_ok";
        if (this.body.id === 0 && this.body.name === "") {
            return textResult(output);
        }
        return textResult("", 400);
    }
}