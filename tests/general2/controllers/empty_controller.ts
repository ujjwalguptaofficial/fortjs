import { Controller, viewResult, worker, route, jsonResult, HTTP_METHOD, defaultWorker, assign, singleton, textResult } from "fortjs";

export class EmptyController extends Controller {
    @route("/noWorker")
    async dailyAccountBalance() {
        return jsonResult({
            status: "Ok"
        })
    }
}