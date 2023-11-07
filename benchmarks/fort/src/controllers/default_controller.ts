import { Controller, viewResult, assign, worker, route, textResult } from "fortjs";

export class DefaultController extends Controller {

    @worker()
    @route("/")
    async index() {
        return textResult(
            'Hello World!'
        );
    }
}