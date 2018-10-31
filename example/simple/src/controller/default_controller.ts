import { Controller, controller } from "server";

@controller()
export class DefaultController extends Controller {
    default() {
        this.response.end("hey there, you got me");
    }

    message() {
        this.response.end("got it")
    }
}