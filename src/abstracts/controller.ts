import { HttpRequest, HttpResponse, ControllerTestData } from "../types";
import { CookieManager, FileManager, Logger } from "../models";
import { SessionProvider } from ".";
import { initController } from "../test_helpers";
import { FortGlobal } from "../fort_global";


export abstract class Controller {
    request: HttpRequest;
    response: HttpResponse;
    query: { [key: string]: string };
    body?: { [key: string]: any };
    session: SessionProvider;
    cookie: CookieManager;
    param?: { [key: string]: string };
    data: { [key: string]: any };

    file?: FileManager;
    get logger(): Logger {
        return FortGlobal.logger;
    }

    constructor(...args) {

    }

    initialize(data?: ControllerTestData) {
        initController(this, data);
    }
}