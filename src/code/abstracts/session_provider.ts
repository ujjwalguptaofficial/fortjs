import { ISessionValue } from "../interfaces/session_value";
import { CookieManager } from "../model/cookie_manager";
import { promise } from "../helpers/promise";
import { __AppSessionIdentifier } from "../constant";
import * as getUniqId from "uniqid";
import { Global } from "../global";

export abstract class SessionProvider {

     sessionId: string;
    protected cookies: CookieManager;

    abstract get(key: string): Promise<ISessionValue>;
    abstract isExist(key: string): Promise<boolean>;
    abstract getAll(): Promise<ISessionValue[]>;
    abstract set(key: string, val: any): Promise<null>;
    abstract setMany(values: ISessionValue[]): Promise<null[]>;
    abstract remove(key: string): Promise<null>;

    protected createSession(): Promise<null> {
        return promise((resolve, reject) => {
            const now = new Date();
            this.sessionId = getUniqId();
            this.cookies.addCookie({
                name: __AppSessionIdentifier,
                value: this.sessionId,
                httpOnly: true,
                path: "/",
                expires: new Date(now.setMinutes(now.getMinutes() + Global.sessionTimeOut))
            });
            resolve();
        });
    }
}

