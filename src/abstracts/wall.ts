import { HttpRequest, HttpResponse, HttpResult } from "../types";
import { CookieManager, Logger } from "../models";
import { Controller } from "./controller";
import { SessionProvider } from "./session_provider";
import { WallTestData, initWall } from "../test_helpers";
import { FortGlobal } from "../fort_global";

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

    abstract onIncoming(...args): Promise<HttpResult>;
    async onOutgoing(...args) {
        return null;
    }

    constructor(...args) {

    }

    initialize(data?: WallTestData) {
        return initWall(this, data);
    }
}