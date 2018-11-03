import { HttpCookie } from "./http_cookie";

export class CookieManager {
    private responseCookie_: string[] = [];
    private cookieCollection_: HttpCookie[] = [];

    constructor(rawValue: string, parsedValue: object) {
        for (var key in parsedValue) {
            this.cookieCollection_.push({
                name: key,
                value: parsedValue[key]
            })
        }
    }

    /**
     * return cookie by name
     *
     * @param {string} name
     * @returns
     * @memberof CookieManager
     */
    getCookie(name: string) {
        return this.cookieCollection_.find(val => val.name === name);
    }

    /**
     * add cookie
     *
     * @param {HttpCookie} cookie
     * @memberof CookieManager
     */
    addCookie(cookie: HttpCookie) {
        this.cookieCollection_.push(cookie);
        this.responseCookie_.push(this.getCookieStringFromCookie_(cookie));
    }

    /**
     * remove cookie
     *
     * @param {string} name
     * @memberof CookieManager
     */
    removeCookie(name: string) {
        const index = this.cookieCollection_.findIndex(val => val.name === name);
        this.cookieCollection_.splice(index, 1);
        //TODO- remove cookie value from rawValues
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
        return this.cookieCollection_.findIndex(val => val.name === name) >= 0;
    }

    private getCookieStringFromCookie_(cookie: HttpCookie) {
        let cookieString = `${cookie.name}=${cookie.value};`
        if (cookie.expires) {
            cookieString += ` Expires =${cookie.expires.toUTCString()};`
        }
        if (cookie.httpOnly === true) {
            cookieString += " HttpOnly;"
        }
        if (cookie.maxAge != null) {
            cookieString += ` Max-Age=${cookie.maxAge}`;
        }
        if (cookie.path) {
            cookieString += ` Path=${cookie.path};`
        }
        if (cookie.domain) {
            cookieString += ` Domain=${cookie.path};`
        }
        return cookieString;
        // return `${cookie.name}="${cookie.value}; expires =${cookie.expires.getTime()}; path=${path};"`
    }

    // public getRawCookieForResponse() {
    //     const cookies: string[] = [];
    //     this.cookieCollection_.forEach((cookie) => {
    //         cookies.push(this.getCookieStringFromCookie_(cookie));
    //     });
    //     console.log(cookies);
    //     return cookies;
    // }
}