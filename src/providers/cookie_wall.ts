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
        const session = new FORT_GLOBAL.sessionProvider();
        session.cookie = new CookieManager(parsedCookies);
        session.sessionId = parsedCookies[FORT_GLOBAL.appSessionIdentifier];
        componentProps.session = session;
        componentProps.cookie = session.cookie;
    }

    async onIncoming(): Promise<void | IHttpResult> {
        this.parseCookieFromRequest();
    }
}