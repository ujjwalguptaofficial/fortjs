import { CookieManager, FileManager } from "../models";
import { SessionManager } from "../utils";
import { IHttpRequest } from "./http_request";
import { IHttpResponse } from "./http_response";

export interface IController {
    request: IHttpRequest;
    response: IHttpResponse;
    query: { [key: string]: string };
    body?: { [key: string]: any };
    session: SessionManager;
    cookie: CookieManager;
    param?: { [key: string]: string };
    data: { [key: string]: any };
    file?: FileManager;
}