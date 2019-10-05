import { HttpRequest, HttpResponse, HttpResult } from "../types";
import { CookieManager, FileManager } from "../models";
import { Controller } from "./controller";
import { SessionProvider } from "./session_provider";
import { GuardTestData } from "../test_helpers/init_guard";
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
    initialize(data?: GuardTestData): Controller;
}
