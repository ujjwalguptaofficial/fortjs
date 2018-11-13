/// <reference types="node" />
import * as http from "http";
import { RequestHandlerHelper } from "./request_handler_helper";
export declare class RequestHandler extends RequestHandlerHelper {
    private body_;
    private cookieManager_;
    private session_;
    private query_;
    private data_;
    private routeMatchInfo_;
    constructor(request: http.IncomingMessage, response: http.ServerResponse);
    private registerEvents;
    private handlePostData_;
    private executeWallBlock_;
    private runController_;
    private executeShieldsProtection_;
    private executeGuardsCheck_;
    private execute_;
    handle(): void;
}
