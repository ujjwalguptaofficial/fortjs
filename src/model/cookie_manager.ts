import { HttpCookie } from "./http_cookie";
import { IHttpCookie } from "../interfaces/http_cookie";

export class CookieManager {
    private responseCookie_: string[] = [];
    private cookieCollection_: { [key: string]: string };

    constructor(parsedValue) {
        this.cookieCollection_ = parsedValue;
    }

    /**
     * return cookie by name
     *
     * @param {string} name
     * @returns
     * @memberof CookieManager
     */
    getCookie(name: string): HttpCookie {
        return {
            name: name,
            value: this.cookieCollection_[name]
        } as IHttpCookie;
    }

    /**
     * add cookie
     *
     * @param {HttpCookie} cookie
     * @memberof CookieManager
     */
    addCookie(cookie: HttpCookie) {
        this.cookieCollection_[cookie.name] = cookie.value;
        this.responseCookie_.push(this.getCookieStringFromCookie_(cookie));
    }

    /**
     * remove cookie
     *
     * @param {string} name
     * @memberof CookieManager
     */
    removeCookie(name: string) {
        this.cookieCollection_[name] = null;
        this.responseCookie_.push(this.getCookieStringFromCookie_({
            name: name,
            value: null,
            expires: new Date('Thu, 01 Jan 1970 00:00:00 GMT'),
            maxAge: -1
        }));
    }

    /**
     * collection of http cookie
     *
     * @readonly
     * @memberof CookieManager
     */
    get cookieCollection() {
        return this.cookieCollection_;
    }

    /**
     * determine whether value exist or not
     *
     * @param {string} name
     * @returns
     * @memberof CookieManager
     */
    isExist(name: string) {
        return this.cookieCollection_[name] != null;
    }

    private getCookieStringFromCookie_(cookie: HttpCookie) {
        const cookies = [];
        
        let cookieString = `${cookie.name}=${cookie.value};`;
        if (cookie.expires) {
            cookieString += ` Expires =${cookie.expires.toUTCString()};`;
        }
        if (cookie.httpOnly === true) {
            cookieString += " HttpOnly;";
        }
        if (cookie.maxAge != null) {
            cookieString += ` Max-Age=${cookie.maxAge};`;
        }
        if (cookie.path) {
            cookieString += ` Path=${cookie.path};`;
        }
        if (cookie.domain) {
            cookieString += ` Domain=${cookie.path};`;
        }
        return cookieString;
    }
}