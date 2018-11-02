import { ISessionValue } from "../interfaces/session_value";
import { CookieManager } from "../model/cookie_manager";
import { promise } from "../helpers/promise";
import { AppSessionIdentifier } from "../constant";
import * as getUniqId from "uniqid";
import { Global } from "../global";

export abstract class SessionProvider {

    sessionId: string;
    cookie: CookieManager;

    abstract get(key: string): Promise<ISessionValue>;
    abstract isExist(key: string): Promise<boolean>;
    abstract getAll(): Promise<ISessionValue[]>;
    abstract set(key: string, val: any): Promise<null>;
    abstract setMany(values: ISessionValue[]);
    abstract remove(key: string): Promise<null>;
    abstract update(key: string, val: any): Promise<null>;

    onSet(): Promise<null> {
        return promise((resolve, reject) => {
            if (!this.cookie.isExist(this.sessionId)) {
                const now = new Date();
                this.cookie.addCookie({
                    name: AppSessionIdentifier,
                    value: getUniqId(),
                    expires: new Date(now.setMinutes(now.getMinutes() + Global.sessionTimeOut))
                });
            }
            resolve();
        });
    }
}

