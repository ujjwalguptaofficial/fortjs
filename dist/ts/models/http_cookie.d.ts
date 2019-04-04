import { IHttpCookie } from "../interfaces";
export declare class HttpCookie implements IHttpCookie {
    name: string;
    value: string;
    maxAge?: number;
    expires?: Date;
    domain?: string;
    httpOnly?: boolean;
    secure?: boolean;
    path?: string;
    constructor(name: string, value: string);
}
