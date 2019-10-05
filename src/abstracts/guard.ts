import { HttpRequest, HttpResponse, HttpResult } from "../types";
import { CookieManager, FileManager } from "../models";
import { Controller } from "./controller";
import { SessionProvider } from "./session_provider";
import { GuardTestData, initGuard } from "../test_helpers/init_guard";

export abstract class Guard implements Controller {
    request: HttpRequest;
    response: HttpResponse;
    query: { [key: string]: string };
    body: { [key: string]: any };
    session: SessionProvider;
    cookie: CookieManager;
    param?: { [key: string]: string };
    data: { [key: string]: any };
    file: FileManager;
    abstract check(...args): Promise<HttpResult>;

    constructor(...args) {

    }

    initialize(data?: GuardTestData) {
        return initGuard(this, data);
    }
}