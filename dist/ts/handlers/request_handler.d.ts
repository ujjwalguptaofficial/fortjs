/// <reference types="node" />
import * as http from "http";
import { PostHandler } from "./post_handler";
export declare class RequestHandler extends PostHandler {
    private session_;
    private query_;
    private data_;
    private routeMatchInfo_;
    constructor(request: http.IncomingMessage, response: http.ServerResponse);
    private registerEvents_;
    private executeWallIncoming_;
    private runController_;
    private executeShieldsProtection_;
    private executeGuardsCheck_;
    private parseCookieFromRequest_;
    private setPreHeader_;
    private onRouteMatched_;
    private execute_;
    handlePostData(): Promise<void>;
    handle(): Promise<void>;
}
