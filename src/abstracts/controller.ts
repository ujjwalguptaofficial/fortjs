import { SessionProvider } from "./session_provider";
import { CookieManager } from "../models/cookie_manager";
import { HttpResponse } from "../types/http_response";
import { HttpRequest } from "../types/http_request";
import { FileManager } from "../models/file_manager";
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
}