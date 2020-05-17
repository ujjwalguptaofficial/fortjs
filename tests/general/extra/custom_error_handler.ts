import { ErrorHandler, htmlResult } from "fortjs";

export class CustomErrorHandler extends ErrorHandler {
    async onForbiddenRequest() {
        return htmlResult(`<h1>We are sorry, but you are not allowed access to this resource.</h1>`)
    }
}