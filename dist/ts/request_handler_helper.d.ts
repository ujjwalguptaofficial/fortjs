/// <reference types="node" />
import * as http from "http";
import { MIME_TYPE } from "./enums/mime_type";
import { HTTP_METHOD } from "./enums/http_method";
import { CookieManager } from "./model/cookie_manager";
import { FortWall } from "./abstracts/fort_wall";
export declare class RequestHandlerHelper {
    protected cookieManager: CookieManager;
    protected response: http.ServerResponse;
    protected request: http.IncomingMessage;
    protected wallInstances: FortWall[];
    protected runWallOutgoing(): Promise<any[]>;
    protected getContentTypeFromNegotiation(type: MIME_TYPE): MIME_TYPE;
    protected getContentTypeFromNegotiationHavingMultipleTypes(types: MIME_TYPE[]): MIME_TYPE;
    private getAvailableTypes_;
    protected onBadRequest(error: any): void;
    protected onForbiddenRequest(): void;
    protected onNotAcceptableRequest(): void;
    protected onNotFound(): void;
    protected onMethodNotAllowed(allowedMethods: HTTP_METHOD[]): void;
    protected onErrorOccured(error: any): void;
}
