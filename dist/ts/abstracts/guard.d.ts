import { HttpRequest, HttpResponse, HttpResult } from "../types";
import { CookieManager, FileManager, Logger } from "../models";
import { Controller } from "./controller";
import { SessionProvider } from "./session_provider";
import { GuardTestData } from "../test_helpers";
export declare abstract class Guard implements Controller {
    request: HttpRequest;
    response: HttpResponse;
    query: {
        [key: string]: any;
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
    abstract check(...args: any[]): Promise<HttpResult | void>;
    get logger(): Logger;
    get option(): import("./component_option").ComponentOption;
    constructor(...args: any[]);
    initialize(data?: GuardTestData): Controller;
}
