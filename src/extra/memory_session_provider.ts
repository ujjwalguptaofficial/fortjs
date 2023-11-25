import { FORT_GLOBAL } from "../constants";
import { ISessonStore } from "../interfaces";
import { CookieManager } from "../models";
import * as getUniqId from "uniqid";
import { TSessionStore } from "../types";


export class MemorySessionProvider {

    sessionId: string;
    protected cookie: CookieManager;
    sessionStore: ISessonStore;

    constructor(cookie: CookieManager, sessionStore: TSessionStore) {
        this.sessionId = cookie.cookieCollection[FORT_GLOBAL.appSessionIdentifier];
        this.sessionStore = new sessionStore(this.sessionId);
        this.cookie = cookie;
    }

    protected createSession(sessionId?) {
        const now = new Date();
        this.sessionId = sessionId != null ? sessionId : getUniqId();
        this.cookie.addCookie({
            name: FORT_GLOBAL.appSessionIdentifier,
            value: this.sessionId,
            httpOnly: true,
            path: "/",
            expires: new Date(now.setMinutes(now.getMinutes() + FORT_GLOBAL.sessionTimeOut)),
            maxAge: FORT_GLOBAL.sessionTimeOut * 60
        });
    }

    protected destroySession() {
        const cookie = this.cookie.getCookie(FORT_GLOBAL.appSessionIdentifier);
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

    async set(key: string, val: any) {
        const savedValue = await this.sessionStore.isAnyExist();
        if (savedValue === false) {
            this.createSession();
            this.sessionStore.sessionId = this.sessionId;
        }
        await this.sessionStore.set(key, val);
    }

    setMany(values: { [key: string]: any }) {
        return this.sessionStore.setMany(values);
    }

    remove(key: string) {
        return this.sessionStore.remove(key);
    }

    async clear() {
        // remove session values
        await this.sessionStore.clear();
        // expire cookie in browser
        this.destroySession();
    }
}