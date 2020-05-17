import { IException } from "../interfaces";
import { HttpResult, HttpFormatResult } from "../types";
export declare class ErrorHandler {
    onServerError(ex: IException): Promise<string>;
    onBadRequest(ex: IException): Promise<HttpResult | HttpFormatResult>;
    onForbiddenRequest(): Promise<HttpResult | HttpFormatResult>;
    onNotAcceptableRequest(): Promise<HttpResult | HttpFormatResult>;
    onMethodNotAllowed(): Promise<HttpResult | HttpFormatResult>;
    onNotFound(url: string): Promise<HttpResult | HttpFormatResult>;
}
