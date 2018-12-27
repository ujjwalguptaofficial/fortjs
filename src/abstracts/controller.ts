import { SessionProvider } from "./session_provider";
import { CookieManager } from "../model/cookie_manager";
import { HttpResponse } from "../types/http_response";
import { HttpRequest } from "../types/http_request";
import { FileManager } from "../model/file_manager";
export abstract class Controller {
    request: HttpRequest;
    response: HttpResponse;
    query: { [key: string]: any };
    body?: { [key: string]: any };
    session: SessionProvider;
    cookie: CookieManager;
    param?: { [key: string]: string };
    data: { [key: string]: any };

    file?: FileManager;
}