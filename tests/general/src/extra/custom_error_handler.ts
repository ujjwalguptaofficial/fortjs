import { ErrorHandler, htmlResult, jsonResult, IHttpResult, HTTP_STATUS_CODE } from "fortjs";

export class CustomErrorHandler extends ErrorHandler {
    async onForbiddenRequest() {
        return htmlResult(`<h1>We are sorry, but you are not allowed access to this resource - ${this.request.url}</h1>`)
    }

    // async onNotFound(url: string): Promise<IHttpResult> {
    //     return jsonResult({
    //         message: `Not found.`,
    //         url: url,
    //         status: 404,
    //         method: this.request.method,
    //         userAgent: this.request.headers['user-agent']
    //     }, 404)
    // }

    async onNotAcceptableRequest(): Promise<IHttpResult> {
        return jsonResult({
            message: `Not Acceptable.`,
            url: this.request.url,
            status: 406,
            method: this.request.method,
            userAgent: this.request.headers['user-agent']
        }, HTTP_STATUS_CODE.NotAcceptable)
    }
}
