import { HttpRequest, HttpResponse, HttpResult, HttpFormatResult } from "../types";
import { CookieManager, Logger } from "../models";
import { Controller } from "./controller";
import { SessionProvider } from "./session_provider";
import { WallTestData, initWall } from "../test_helpers";
import { FortGlobal } from "../fort_global";
import { promiseResolve } from "../utils";

export abstract class Wall implements Controller {
    request: HttpRequest;
    response: HttpResponse;
    query: { [key: string]: string };
    session: SessionProvider;
    cookie: CookieManager;

    data: { [key: string]: any };

    get logger(): Logger {
        return FortGlobal.logger;
    }

    get option() {
        return FortGlobal.componentOption;
    }

    abstract onIncoming(...args): Promise<HttpResult | void>;

    onOutgoing(finalResult: HttpResult | HttpFormatResult, ...args) {
        return promiseResolve(null);
    }

    // eslint-disable-next-line
    constructor(...args) {

    }

    initialize(data?: WallTestData) {
        return initWall(this, data);
    }
}