import { HttpRequest, HttpResponse, HttpResult } from "../types";
import { CookieManager } from "../models";
import { SessionProvider, Controller } from ".";
import { ShieldTestData, initShield } from "../test_helpers";


export abstract class Shield implements Controller {
    workerName: string;
    request: HttpRequest;
    response: HttpResponse;
    query: { [key: string]: string };

    session: SessionProvider;
    cookie: CookieManager;

    data: { [key: string]: any };

    abstract protect(...args): Promise<HttpResult>;

    constructor(...args) {

    }

    initialize(data?: ShieldTestData) {
        return initShield(this, data);
    }
}

