import { HttpRequest } from "./http_request";
import { HttpFile } from "../models";
export declare type ControllerTestData = {
    request?: HttpRequest;
    query?: {
        [key: string]: string;
    };
    body?: {
        [key: string]: any;
    };
    cookieValue?: {
        [key: string]: string;
    };
    param?: {
        [key: string]: string;
    };
    data?: {
        [key: string]: any;
    };
    file?: {
        [fieldName: string]: HttpFile;
    };
};
