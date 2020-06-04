import { HttpRequest, HttpResponse, HttpResult } from "../types";
import { CookieManager, Logger } from "../models";
import { SessionProvider, Controller } from ".";
import { ShieldTestData, initShield } from "../test_helpers";
import { FortGlobal } from "../fort_global";
import { ComponentOption } from "./component_option";

export abstract class Shield implements Controller {
    workerName: string;
    request: HttpRequest;
    response: HttpResponse;
    query: { [key: string]: any };

    session: SessionProvider;
    cookie: CookieManager;

    data: { [key: string]: any };

    get logger(): Logger {
        return FortGlobal.logger;
    }

    get option(): ComponentOption {
        return FortGlobal.componentOption;
    }

    abstract protect(...args): Promise<HttpResult | void>;

    constructor(...args) {

    }

    initialize(data?: ShieldTestData) {
        return initShield(this, data);
    }
}

