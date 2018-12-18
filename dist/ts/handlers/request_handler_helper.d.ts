/// <reference types="node" />
import * as http from "http";
import { MIME_TYPE } from "../enums/mime_type";
import { HTTP_METHOD } from "../enums/http_method";
import { CookieManager } from "../model/cookie_manager";
import { Wall } from "../abstracts/wall";
export declare class RequestHandlerHelper {
    protected cookieManager: CookieManager;
    protected response: http.ServerResponse;
    protected request: http.IncomingMessage;
    protected wallInstances: Wall[];
    protected isNullOrEmpty(value: any): boolean;
    protected runWallOutgoing(): Promise<any[]>;
    protected getContentTypeFromNegotiation(type: MIME_TYPE): MIME_TYPE;
    protected getContentTypeFromNegotiationHavingMultipleTypes(types: MIME_TYPE[]): MIME_TYPE;
    private getAvailableTypes_;
    protected onBadRequest(error: any): Promise<void>;
    protected onForbiddenRequest(): Promise<void>;
    protected onNotAcceptableRequest(): Promise<void>;
    protected onNotFound(): Promise<void>;
    protected onMethodNotAllowed(allowedMethods: HTTP_METHOD[]): Promise<void>;
    protected onErrorOccured(error: any): Promise<void>;
}
