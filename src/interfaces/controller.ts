import { HttpRequest, HttpResponse } from "../types";
import { CookieManager, FileManager } from "../models";
import { SessionManager } from "../utils";

export interface IController {
    request: HttpRequest;
    response: HttpResponse;
    query: { [key: string]: string };
    body?: { [key: string]: any };
    session: SessionManager;
    cookie: CookieManager;
    param?: { [key: string]: string };
    data: { [key: string]: any };
    file?: FileManager;
}