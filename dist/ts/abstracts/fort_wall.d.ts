import { Controller } from "./controller";
import { IHttpRequest } from "../interfaces/http_request";
import { IHttpResponse } from "../interfaces/http_response";
import { SessionProvider } from "./session_provider";
import { CookieManager } from "../model/cookie_manager";
import { HttpResult } from "../types";
export declare abstract class FortWall implements Controller {
    request: IHttpRequest;
    response: IHttpResponse;
    query: {
        [key: string]: any;
    };
    body: {
        [key: string]: any;
    };
    session: SessionProvider;
    cookies: CookieManager;
    params: {
        [key: string]: any;
    };
    data: {
        [key: string]: any;
    };
    abstract onIncoming(): Promise<HttpResult>;
    onOutgoing(): Promise<any>;
}
