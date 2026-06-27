export type CookieSameSite = "Strict" | "Lax" | "None";

export interface IHttpCookieWithoutValue {
    name: string;
    maxAge?: number;

    expires?: Date;

    domain?: string;
    httpOnly?: boolean;
    secure?: boolean;
    path?: string;
    sameSite?: CookieSameSite;
}

export interface IHttpCookie extends IHttpCookieWithoutValue {
    value: string;
}
