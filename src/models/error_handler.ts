import { IException } from "../interfaces";
import { promise, htmlResult } from "../helpers";
import { HttpResult, HttpFormatResult } from "../types";
import { HTTP_STATUS_CODE } from "../enums";

export class ErrorHandler {
    onServerError(ex: IException): Promise<string> {
        return promise<string>((resolve, reject) => {
            let errMessage = `<h1>internal server error</h1>
            <h3>message : ${ex.message}</h3>`;
            if (ex.stack) {
                errMessage += `<p><b>stacktrace:</b> ${ex.stack}</p>`;
            }
            if (ex.type) {
                errMessage += `<p><b>type:</b> ${ex.type}</p>`;
            }
            resolve(errMessage);
        });
    }

    async onBadRequest(ex: IException): Promise<HttpResult | HttpFormatResult> {
        let errMessage = `<h1>Bad Request</h1>`;
        if (ex.message) {
            errMessage += ` <h3>message : ${ex.message} </h3>`;
        }
        if (ex.stack) {
            errMessage += `<p><b>stacktrace:</b> ${ex.stack}</p>`;
        }
        if (ex.type) {
            errMessage += `<p><b>type:</b> ${ex.type}</p>`;
        }
        return htmlResult(errMessage, HTTP_STATUS_CODE.BadRequest);
    }

    async  onForbiddenRequest(): Promise<HttpResult | HttpFormatResult> {
        return htmlResult(`<h1>Forbidden</h1>`, HTTP_STATUS_CODE.Forbidden);
    }

    async  onNotAcceptableRequest(): Promise<HttpResult | HttpFormatResult> {
        return htmlResult(`<h1>Not Acceptable</h1>`, HTTP_STATUS_CODE.NotAcceptable);
    }

    onMethodNotAllowed(): Promise<string> {
        return promise<string>((resolve, reject) => {
            const errMessage = `<h1>Method Not allowed.</h1>`;
            resolve(errMessage);
        });
    }

    onNotFound(url: string): Promise<string> {
        return promise<string>((resolve, reject) => {
            const errMessage = `<h1>The requested resource ${url} was not found.</h1>`;
            resolve(errMessage);
        });
    }
}