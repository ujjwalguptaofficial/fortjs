/// <reference types="node" />
import { MIME_TYPE, HTTP_METHOD } from "../enums";
import * as http from "http";
import { CookieManager } from "../models";
import { Wall } from "../abstracts";
export declare class RequestHandlerHelper {
    protected cookieManager: CookieManager;
    protected response: http.ServerResponse;
    protected request: http.IncomingMessage;
    protected wallInstances: Wall[];
    protected runWallOutgoing(): Promise<any[]>;
    protected getContentTypeFromNegotiation(type: MIME_TYPE): MIME_TYPE;
    protected getContentTypeFromNegotiationHavingMultipleTypes(types: MIME_TYPE[]): MIME_TYPE;
    private getAvailableTypes_;
    protected onBadRequest(error: any): Promise<void>;
    protected onForbiddenRequest(): Promise<void>;
    protected onNotAcceptableRequest(): Promise<void>;
    protected onNotFound(): Promise<void>;
    protected onMethodNotAllowed(allowedMethods: HTTP_METHOD[]): Promise<void>;
    protected onErrorOccured(error: any, isFromInComingWall?: any): Promise<void>;
    protected onRequestOptions(allowedMethods: HTTP_METHOD[]): Promise<void>;
}
