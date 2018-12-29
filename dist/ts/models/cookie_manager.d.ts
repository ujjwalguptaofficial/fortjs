import { HttpCookie } from "./http_cookie";
export declare class CookieManager {
    private responseCookie_;
    private cookieCollection_;
    constructor(parsedValue: any);
    /**
     * return cookie by name
     *
     * @param {string} name
     * @returns
     * @memberof CookieManager
     */
    getCookie(name: string): HttpCookie;
    /**
     * add cookie
     *
     * @param {HttpCookie} cookie
     * @memberof CookieManager
     */
    addCookie(cookie: HttpCookie): void;
    /**
     * remove cookie
     *
     * @param {HttpCookie} cookie
     * @memberof CookieManager
     */
    removeCookie(cookie: HttpCookie): void;
    /**
     * collection of http cookie
     *
     * @readonly
     * @memberof CookieManager
     */
    readonly cookieCollection: {
        [key: string]: string;
    };
    /**
     * determine whether value exist or not
     *
     * @param {string} name
     * @returns
     * @memberof CookieManager
     */
    isExist(name: string): boolean;
    private getCookieStringFromCookie_;
}
