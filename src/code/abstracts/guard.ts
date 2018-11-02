import { Controller } from "./controller";
import { IHttpRequest } from "../interfaces/http_request";
import { IHttpResponse } from "../interfaces/http_response";
import { SessionProvider } from "./session_provider";
import { CookieManager } from "../model/cookie_manager";

export abstract class Guard implements Controller {
    request: IHttpRequest;
    response: IHttpResponse;
    query: object;
    body: object;
    session: SessionProvider;
    cookies: CookieManager;
    
    abstract check(): Promise<boolean>;
}