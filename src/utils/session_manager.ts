import { ISessonStore } from "../interfaces";
import { App, CookieManager } from "../models";
import * as getUniqId from "uniqid";

export class SessionManager {

    sessionId: string;
    protected cookie: CookieManager;
    sessionStore: ISessonStore;

    constructor(cookie: CookieManager, private appGlobal_: App) {
        this.sessionId = cookie.cookieCollection[appGlobal_['appSessionIdentifier_']];
        this.sessionStore = new appGlobal_.sessionStore(this.sessionId);
        this.cookie = cookie;
    }

    protected createSession(sessionId?) {
        const now = new Date();
        this.sessionId = sessionId != null ? sessionId : getUniqId();
        const appGlobal = this.appGlobal_;
        this.cookie.addCookie({
            name: appGlobal['appSessionIdentifier_'],
            value: this.sessionId,
            httpOnly: true,
            path: "/",
            expires: new Date(now.setMinutes(now.getMinutes() + appGlobal.sessionTimeOut)),
            maxAge: appGlobal.sessionTimeOut * 60
        });
    }

    private destroy_() {
        const cookie = this.cookie.getCookie(this.appGlobal_['appSessionIdentifier_']);
        cookie.httpOnly = true;
        cookie.path = "/";
        this.cookie.removeCookie(cookie);
    }

    get(key: string) {
        return this.sessionStore.get(key);
    }

    isExist(key: string) {
        return this.sessionStore.isExist(key);
    }

    getAll() {
        return this.sessionStore.getAll();
    }

    private async createSessionIfNotExist_() {
        const savedValue = await this.sessionStore.isAnyExist();
        if (savedValue === false) {
            this.createSession();
            this.sessionStore.sessionId = this.sessionId;
        }
    }

    async set(key: string, val: any) {
        await this.createSessionIfNotExist_();
        await this.sessionStore.set(key, val);
    }

    async setMany(values: { [key: string]: any }) {
        await this.createSessionIfNotExist_();
        return this.sessionStore.setMany(values);
    }

    remove(key: string) {
        return this.sessionStore.remove(key);
    }

    async clear() {
        // remove session values
        await this.sessionStore.clear();
        // expire cookie in browser
        this.destroy_();
    }
}