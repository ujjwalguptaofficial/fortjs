import { HttpCookie } from "./http_cookie";
import { IHttpCookie } from "../interfaces";

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
     * @param {HttpCookie} cookie
     * @memberof CookieManager
     */
    removeCookie(cookie: HttpCookie) {
        this.cookieCollection_[cookie.name] = null;
        cookie.expires = new Date('Thu, 01 Jan 1970 00:00:00 GMT');
        cookie.maxAge = -1;
        this.responseCookie_.push(this.getCookieStringFromCookie_(cookie));
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
        cookies.push(`${cookie.name}=${cookie.value}`);
        if (cookie.expires) {
            cookies.push(`Expires=${cookie.expires.toUTCString()}`);
        }
        if (cookie.httpOnly === true) {
            cookies.push("HttpOnly");
        }
        if (cookie.maxAge != null) {
            cookies.push(`Max-Age=${cookie.maxAge}`);
        }
        if (cookie.path) {
            cookies.push(`Path=${cookie.path}`);
        }
        if (cookie.domain) {
            cookies.push(`Domain=${cookie.domain}`);
        }
        return cookies.join('; ');
    }
}