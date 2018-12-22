import { CookieManager } from "../model/cookie_manager";
import { __AppSessionIdentifier } from "../constant";
import * as getUniqId from "uniqid";
import { Global } from "../global";
import { SessionValue } from "../types/session_value";

export abstract class SessionProvider {

    sessionId: string;
    protected cookies: CookieManager;

    abstract get(key: string): Promise<SessionValue>;
    abstract isExist(key: string): Promise<boolean>;
    abstract getAll(): Promise<SessionValue[]>;
    abstract set(key: string, val: any): Promise<void>;
    abstract setMany(values: SessionValue[]): Promise<void[]>;
    abstract remove(key: string): Promise<void>;

    abstract clear(): Promise<void>;

    protected async createSession() {
        const now = new Date();
        this.sessionId = getUniqId();
        this.cookies.addCookie({
            name: __AppSessionIdentifier,
            value: this.sessionId,
            httpOnly: true,
            path: "/",
            expires: new Date(now.setMinutes(now.getMinutes() + Global.sessionTimeOut))
        });
    }
}

