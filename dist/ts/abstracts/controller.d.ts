import { HttpRequest, HttpResponse, ControllerTestData } from "../types";
import { CookieManager, FileManager, Logger } from "../models";
import { SessionProvider } from ".";
export declare abstract class Controller {
    request: HttpRequest;
    response: HttpResponse;
    query: {
        [key: string]: any;
    };
    body?: {
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
    get option(): import("./component_option").ComponentOption;
    file?: FileManager;
    get logger(): Logger;
    constructor(...args: any[]);
    initialize(data?: ControllerTestData): void;
}
