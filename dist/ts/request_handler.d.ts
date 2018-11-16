/// <reference types="node" />
import * as http from "http";
import { FileHandler } from "./file_handler";
export declare class RequestHandler extends FileHandler {
    private body_;
    private cookieManager_;
    private session_;
    private query_;
    private data_;
    private routeMatchInfo_;
    private wallInstances_;
    constructor(request: http.IncomingMessage, response: http.ServerResponse);
    private registerEvents;
    private handlePostData_;
    private runWallOutgoing_;
    private runWallIncoming_;
    private runController_;
    private executeShieldsProtection_;
    private executeGuardsCheck_;
    private execute_;
    handle(): void;
}
