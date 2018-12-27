import { SessionProvider } from "./session_provider";
import { CookieManager } from "../model/cookie_manager";
import { Controller } from "./controller";
import { HttpResult } from "../types";
import { HttpRequest } from "../types/http_request";
import { HttpResponse } from "../types/http_response";
import { FileManager } from "../model/file_manager";
export declare abstract class Guard implements Controller {
    request: HttpRequest;
    response: HttpResponse;
    query: {
        [key: string]: string;
    };
    body: {
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
    file: FileManager;
    abstract check(): Promise<HttpResult>;
}
