import { IHttpCookie } from "../interfaces/http_cookie";

export class HttpCookie implements IHttpCookie {
    name: string;
    value: string;
    expires?: Date;
    domain?: string;
    httpOnly?: boolean;
    secure?: boolean;

    constructor(name?: string) {
        this.name = name;
    }
}