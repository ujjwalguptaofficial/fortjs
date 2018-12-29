import { IHttpCookie } from "../interfaces/http_cookie";

export class HttpCookie implements IHttpCookie {
    name: string;
    value: string;
    maxAge?: number;
    expires?: Date;
    domain?: string;
    httpOnly?: boolean;
    secure?: boolean;
    path?: string;

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }
}