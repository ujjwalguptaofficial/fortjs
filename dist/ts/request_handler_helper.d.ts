/// <reference types="node" />
import * as http from "http";
import { HTTP_METHOD } from "./enums/http_method";
export declare class RequestHandlerHelper {
    protected response: http.ServerResponse;
    protected request: http.IncomingMessage;
    protected onBadRequest(error: any): void;
    protected onForbiddenRequest(): void;
    protected onNotFound(): void;
    protected onMethodNotAllowed(allowedMethods: HTTP_METHOD[]): void;
    protected onErrorOccured(error: any): void;
}
