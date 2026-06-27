import { IHttpCookie, CookieSameSite } from "../interfaces";

export class HttpCookie implements IHttpCookie {
    name: string;
    value: string;
    maxAge?: number;
    expires?: Date;
    domain?: string;
    httpOnly?: boolean;
    secure?: boolean;
    path?: string;
    sameSite?: CookieSameSite

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }
}
