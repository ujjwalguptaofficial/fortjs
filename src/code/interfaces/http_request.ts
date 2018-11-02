import { HTTP_METHOD } from "../enums";

export interface IHttpRequest {
    url: string;
    method: HTTP_METHOD;
    headers: object;
}