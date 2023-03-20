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
    runController_: any;
    private executeShieldsProtection_;
    private executeGuardsCheck_;
    private parseCookieFromRequest_;
    private setPreHeader_;
    private checkExpectedQuery_;
    private checkExpectedBody_;
    private onRouteMatched_;
    private execute_;
    handlePostData(): Promise<unknown>;
    handle(): void;
    setControllerProps_(): any;
}
