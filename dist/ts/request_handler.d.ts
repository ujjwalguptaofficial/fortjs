/// <reference types="node" />
import * as http from "http";
import { ControllerHandler } from "./controller_handler";
export declare class RequestHandler extends ControllerHandler {
    private body_;
    private session_;
    private query_;
    private data_;
    private routeMatchInfo_;
    constructor(request: http.IncomingMessage, response: http.ServerResponse);
    private registerEvents;
    private handlePostData_;
    private runWallIncoming_;
    private runController_;
    private executeShieldsProtection_;
    private executeGuardsCheck_;
    private execute_;
    handle(): void;
}
