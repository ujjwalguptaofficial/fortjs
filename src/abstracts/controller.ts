import { HttpRequest, HttpResponse, ControllerTestData } from "../types";
import { CookieManager, FileManager, Logger } from "../models";
import { SessionProvider } from ".";
import { initController } from "../test_helpers";
import { FortGlobal } from "../fort_global";
import { ComponentOption } from "./component_option";


export abstract class Controller {
    request: HttpRequest;
    response: HttpResponse;
    query: { [key: string]: any };
    body?: { [key: string]: any };
    session: SessionProvider;
    cookie: CookieManager;
    param?: { [key: string]: string };
    data: { [key: string]: any };

    get option(): ComponentOption {
        return FortGlobal.componentOption;
    }

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