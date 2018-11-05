import { IHttpRequest } from "../interfaces/http_request";
import { IHttpResponse } from "../interfaces/http_response";
import { SessionProvider } from "./session_provider";
import { CookieManager } from "../model/cookie_manager";
export abstract class Controller {
    request: IHttpRequest;
    response: IHttpResponse;
    query: any;
    body: any;
    session: SessionProvider;
    cookies: CookieManager;

    params: any;
}