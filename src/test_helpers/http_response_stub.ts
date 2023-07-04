import { HttpResponse } from "../types";

export class HttpResponseStub implements HttpResponse {
    private headers_;
    constructor(headers) {
        this.headers_ = headers;
    }

    getHeader(name: string) {
        return this.headers_[name];
    }

    hasHeader(name: string) {
        return this.headers_[name] != null;
    }

    setHeader(name: string, value: number | string | string[]) {
        this.headers_[name] = value;
    }

    getHeaders() {
        return this.headers_;
    }

    getHeaderNames(): string[] {
        return Object.keys[this.headers_];
    }

    removeHeader(name: string) {
        delete this.headers_[name];
    }
}