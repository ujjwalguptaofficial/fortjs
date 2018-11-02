import { IHttpRequest } from "../interfaces/http_request";
import { IHttpResponse } from "../interfaces/http_response";
import { SessionProvider } from "./session_provider";
import { CookieManager } from "../model/cookie_manager";
export abstract class Controller {
    abstract request: IHttpRequest;
    abstract response: IHttpResponse;
    abstract query: object;
    abstract body: object;
    abstract session: SessionProvider;
    abstract cookies: CookieManager;
}