export interface IHttpCookie {
    name: string;
    value: string;
    expires?: Date;
    domain?: string;
    httpOnly?: boolean;
    secure?: boolean;
}