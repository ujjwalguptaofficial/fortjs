import { HttpRequest, HttpResponse, HttpResult } from "../types";
import { CookieManager } from "../models";
import { SessionProvider, Controller } from ".";

export abstract class Wall implements Controller {
    request: HttpRequest;
    response: HttpResponse;
    query: { [key: string]: string };
    session: SessionProvider;
    cookie: CookieManager;

    data: { [key: string]: any };

    abstract onIncoming(): Promise<HttpResult>;
    async onOutgoing() {
        return null;
    }
}