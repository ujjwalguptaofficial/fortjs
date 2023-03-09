import { IException } from "../interfaces";
import { htmlResult } from "../helpers";
import { HttpResult, HttpFormatResult } from "../types";
import { HTTP_STATUS_CODE } from "../enums";

export class ErrorHandler {
    async onServerError(ex: IException): Promise<HttpResult | HttpFormatResult> {
        let errMessage = `<h1>internal server error</h1>
            <h3>message : ${ex.message}</h3>`;
        if (ex.stack) {
            errMessage += `<p><b>stacktrace:</b> ${ex.stack}</p>`;
        }
        if (ex.type) {
            errMessage += `<p><b>type:</b> ${ex.type}</p>`;
        }
        return htmlResult(errMessage, HTTP_STATUS_CODE.InternalServerError);
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

    async onForbiddenRequest(): Promise<HttpResult | HttpFormatResult> {
        return htmlResult(`<h1>Forbidden</h1>`, HTTP_STATUS_CODE.Forbidden);
    }

    async onNotAcceptableRequest(): Promise<HttpResult | HttpFormatResult> {
        return htmlResult(`<h1>Not Acceptable</h1>`, HTTP_STATUS_CODE.NotAcceptable);
    }

    async onMethodNotAllowed(): Promise<HttpResult | HttpFormatResult> {
        return htmlResult(`<h1>Method Not allowed.</h1>`, HTTP_STATUS_CODE.MethodNotAllowed);
    }

    async onNotFound(url: string): Promise<HttpResult | HttpFormatResult> {
        return htmlResult(`<h1>The requested resource ${url} was not found.</h1>`, HTTP_STATUS_CODE.NotFound);
    }
}