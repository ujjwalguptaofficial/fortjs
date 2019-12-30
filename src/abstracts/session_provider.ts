import { CookieManager } from "../models";
import * as getUniqId from "uniqid";
import { FortGlobal } from "../fort_global";
import { SessionValue } from "../types";

export abstract class SessionProvider {

    sessionId: string;
    protected cookie: CookieManager;

    abstract get(key: string): Promise<any>;
    abstract isExist(key: string): Promise<boolean>;
    abstract getAll(): Promise<SessionValue[]>;
    abstract set(key: string, val: any): Promise<void>;
    abstract setMany(values: { [key: string]: any }): Promise<void[]>;
    abstract remove(key: string): Promise<void>;

    abstract clear(): Promise<void>;

    protected createSession() {
        const now = new Date();
        this.sessionId = getUniqId();
        this.cookie.addCookie({
            name: FortGlobal.appSessionIdentifier,
            value: this.sessionId,
            httpOnly: true,
            path: "/",
            expires: new Date(now.setMinutes(now.getMinutes() + FortGlobal.sessionTimeOut)),
            maxAge: FortGlobal.sessionTimeOut * 60
        });
    }

    protected destroySession() {
        const cookie = this.cookie.getCookie(FortGlobal.appSessionIdentifier);
        cookie.httpOnly = true;
        cookie.path = "/";
        this.cookie.removeCookie(cookie);
    }
}

