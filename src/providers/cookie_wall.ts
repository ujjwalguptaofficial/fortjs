import { Wall } from "../abstracts";
import { COOKIE, FORT_GLOBAL } from "../constants";
import { parseCookie } from "../helpers";
import { IHttpResult } from "../interfaces";
import { CookieManager } from "../models";

export class CookieEvaluatorWall extends Wall {
    parseCookieFromRequest() {
        const componentProps = this['componentProp_'];
        if (FORT_GLOBAL.shouldParseCookie === false) {
            componentProps.cookie = new CookieManager({});
            return;
        }
        const request = this.request;
        const rawCookie = (request.headers[COOKIE] || request.headers["cookie"]) as string;
        const parsedCookies = parseCookie(rawCookie);
        const cookie = new CookieManager(parsedCookies);
        const session = new FORT_GLOBAL.sessionProvider(cookie, FORT_GLOBAL.sessionStore);
        componentProps.session = session;
        componentProps.cookie = cookie;
    }

    async onIncoming(): Promise<void | IHttpResult> {
        this.parseCookieFromRequest();
    }
}