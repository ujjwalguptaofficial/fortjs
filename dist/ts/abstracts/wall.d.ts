import { HttpRequest, HttpResponse, HttpResult } from "../types";
import { CookieManager } from "../models";
import { SessionProvider, Controller } from ".";
export declare abstract class Wall implements Controller {
    request: HttpRequest;
    response: HttpResponse;
    query: {
        [key: string]: string;
    };
    session: SessionProvider;
    cookie: CookieManager;
    data: {
        [key: string]: any;
    };
    abstract onIncoming(...args: any[]): Promise<HttpResult>;
    onOutgoing(...args: any[]): Promise<any>;
    constructor(...args: any[]);
}
