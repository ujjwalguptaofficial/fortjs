import { HttpRequest } from "./http_request";

export type ControllerTestData = {
    request?: HttpRequest;
    query?: { [key: string]: string };
    body?: { [key: string]: any };
    cookieValue?: { [key: string]: string };
    param?: { [key: string]: string };
    data?: { [key: string]: any };
};
