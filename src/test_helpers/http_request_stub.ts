import { HttpRequest } from "../types";

export class HttpRequestStub implements HttpRequest {
    headers;

    constructor(headers) {
        this.headers = headers;
    }
}