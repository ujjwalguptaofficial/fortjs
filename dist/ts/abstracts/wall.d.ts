import { HttpRequest, HttpResponse, HttpResult, HttpFormatResult } from "../types";
import { CookieManager, Logger } from "../models";
import { Controller } from "./controller";
import { SessionProvider } from "./session_provider";
import { WallTestData } from "../test_helpers";
import { ComponentOption } from "./component_option";
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
    readonly logger: Logger;
    readonly option: ComponentOption;
    abstract onIncoming(...args: any[]): Promise<HttpResult | void>;
    onOutgoing(finalResult: HttpResult | HttpFormatResult, ...args: any[]): Promise<any>;
    constructor(...args: any[]);
    initialize(data?: WallTestData): Controller;
}
