import { IHttpRequest } from "../../interfaces";

export class HttpRequestStub implements IHttpRequest {
    headers;

    constructor(headers) {
        this.headers = headers;
    }
}