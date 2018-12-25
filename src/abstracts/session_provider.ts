import { CookieManager } from "../model/cookie_manager";
import * as getUniqId from "uniqid";
import { Global } from "../global";
import { SessionValue } from "../types/session_value";

export abstract class SessionProvider {

    sessionId: string;
    protected cookie: CookieManager;

    abstract get(key: string): Promise<SessionValue>;
    abstract isExist(key: string): Promise<boolean>;
    abstract getAll(): Promise<SessionValue[]>;
    abstract set(key: string, val: any): Promise<void>;
    abstract setMany(values: SessionValue[]): Promise<void[]>;
    abstract remove(key: string): Promise<void>;

    abstract clear(): Promise<void>;

    protected createSession() {
        const now = new Date();
        this.sessionId = getUniqId();
        this.cookie.addCookie({
            name: Global.appSessionIdentifier,
            value: this.sessionId,
            httpOnly: true,
            path: "/",
            expires: new Date(now.setMinutes(now.getMinutes() + Global.sessionTimeOut)),
            maxAge: Global.sessionTimeOut * 60
        });
    }

    protected destroySession() {
        const cookie = this.cookie.getCookie(Global.appSessionIdentifier);
        cookie.httpOnly = true;
        cookie.path = "/";
        cookie.expires = new Date('Thu, 01 Jan 1970 00:00:00 GMT');
        cookie.maxAge = -1;
        this.cookie.removeCookie(cookie);
    }
}

