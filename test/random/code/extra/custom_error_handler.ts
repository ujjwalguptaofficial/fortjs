import { ErrorHandler } from "fortjs";

export class CustomErrorHandler extends ErrorHandler {
    onForbiddenRequest(): Promise<string> {
        return new Promise((res, rej) => {
            res(`<h1>We are sorry, but you are not allowed access to this resource.</h1>`);
        });
    }
}