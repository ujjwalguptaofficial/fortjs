import { HttpRequest, HttpResponse, HttpResult } from "../types";
import { CookieManager, Logger } from "../models";
import { SessionProvider, Controller } from ".";
import { ShieldTestData } from "../test_helpers";
import { ComponentOption } from "./component_option";
export declare abstract class Shield implements Controller {
    workerName: string;
    request: HttpRequest;
    response: HttpResponse;
    query: {
        [key: string]: any;
    };
    session: SessionProvider;
    cookie: CookieManager;
    data: {
        [key: string]: any;
    };
    readonly logger: Logger;
    readonly option: ComponentOption;
    abstract protect(...args: any[]): Promise<HttpResult | void>;
    constructor(...args: any[]);
    initialize(data?: ShieldTestData): ShieldTestData;
}
