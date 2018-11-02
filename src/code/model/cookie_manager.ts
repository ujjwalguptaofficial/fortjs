import { HttpCookie } from "./http_cookie";

export class CookieManager {
    private rawValue: string;
    private values: object;

    constructor(rawValue: string, values: object) {
        this.rawValue = rawValue;
        this.values = values;
    }

    /**
     * return cookie by name
     *
     * @param {string} name
     * @returns
     * @memberof CookieManager
     */
    getCookie(name: string) {
        return {
            name: name,
            value: this.values[name]
        } as HttpCookie
    }

    /**
     * add cookie
     *
     * @param {HttpCookie} cookie
     * @memberof CookieManager
     */
    addCookie(cookie: HttpCookie) {
        this.values[cookie.name] = cookie.value;
        //TODO- Add cookie value to rawValues
    }

    /**
     * remove cookie
     *
     * @param {string} name
     * @memberof CookieManager
     */
    removeCookie(name: string) {
        this.values[name] = null;
        //TODO- remove cookie value from rawValues
    }

    /**
     * collection of http cookie
     *
     * @readonly
     * @memberof CookieManager
     */
    get cookieCollection() {
        const cookies: HttpCookie[] = [];
        for (var key in this.values) {
            cookies.push({
                name: key,
                value: this.values[key]
            })
        }
        return cookies;
    }

    /**
     * determine whether value exist or not
     *
     * @param {string} name
     * @returns
     * @memberof CookieManager
     */
    isExist(name: string) {
        return this.values[name] != null;
    }
}