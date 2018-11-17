/// <reference types="node" />
import * as http from "http";
import { MIME_TYPE } from "./enums/mime_type";
import { HTTP_METHOD } from "./enums/http_method";
import { CookieManager } from "./model/cookie_manager";
export declare class RequestHandlerHelper {
    protected cookieManager: CookieManager;
    protected response: http.ServerResponse;
    protected request: http.IncomingMessage;
    protected getContentTypeFromNegotiation(type: MIME_TYPE): string;
    private getAvailableTypes_;
    protected onBadRequest(error: any): void;
    protected onForbiddenRequest(): void;
    protected onNotAcceptableRequest(): void;
    protected onNotFound(): void;
    protected onMethodNotAllowed(allowedMethods: HTTP_METHOD[]): void;
    protected onErrorOccured(error: any): void;
}
