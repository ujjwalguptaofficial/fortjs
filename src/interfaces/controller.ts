import { HttpRequest, HttpResponse } from "../types";
import { CookieManager, FileManager } from "../models";
import { SessionProvider } from "../abstracts";

export interface IController {
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