import { HttpRequest, HttpResponse, ControllerTestData } from "../types";
import { CookieManager, FileManager, Logger } from "../models";
import { SessionProvider } from ".";
import { ComponentOption } from "./component_option";
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
    readonly option: ComponentOption;
    file?: FileManager;
    readonly logger: Logger;
    constructor(...args: any[]);
    initialize(data?: ControllerTestData): void;
}
