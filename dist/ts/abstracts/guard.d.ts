import { HttpRequest, HttpResponse, HttpResult } from "../types";
import { CookieManager, FileManager } from "../models";
import { SessionProvider, Controller } from ".";
export declare abstract class Guard implements Controller {
    request: HttpRequest;
    response: HttpResponse;
    query: {
        [key: string]: string;
    };
    body: {
        [key: string]: any;
    };
    session: SessionProvider;
    cookie: CookieManager;
    param?: {
        [key: string]: string;
    };
    data: {
        [key: string]: any;
    };
    file: FileManager;
    abstract check(...args: any[]): Promise<HttpResult>;
    constructor(...args: any[]);
}
