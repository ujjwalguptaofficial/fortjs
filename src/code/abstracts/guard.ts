import { IHttpRequest } from "../interfaces/http_request";
import { IHttpResponse } from "../interfaces/http_response";
import { SessionProvider } from "./session_provider";
import { CookieManager } from "../model/cookie_manager";
import { Controller } from "./controller";

export abstract class Guard implements Controller {
    request: IHttpRequest;
    response: IHttpResponse;
    query: object;
    body: object;
    session: SessionProvider;
    cookies: CookieManager;
    params: any;
    data: any;
    abstract check(): Promise<boolean>;
}