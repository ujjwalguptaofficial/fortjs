import { HttpRequest, HttpResponse } from "../types";
import { CookieManager, FileManager } from "../models";
import { MemorySessionProvider } from "../extra";

export interface IController {
    request: HttpRequest;
    response: HttpResponse;
    query: { [key: string]: string };
    body?: { [key: string]: any };
    session: MemorySessionProvider;
    cookie: CookieManager;
    param?: { [key: string]: string };
    data: { [key: string]: any };
    file?: FileManager;
}