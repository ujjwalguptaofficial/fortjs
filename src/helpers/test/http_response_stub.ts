import { OutgoingHttpHeaders, OutgoingHttpHeader } from "http";
import { IHttpResponse } from "../../interfaces";

export class HttpResponseStub implements IHttpResponse {
    private headers_;
    statusCode;

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

    writeHead(statusCode: number, statusMessage?: string, headers?: OutgoingHttpHeaders | OutgoingHttpHeader[]): this;
    writeHead(statusCode: number, headers?: OutgoingHttpHeaders | OutgoingHttpHeader[]): this;
    writeHead(statusCode: unknown, statusMessage?: unknown, headers?: unknown): this {
        this.statusCode = statusCode as number;
        return this;
    }

    end() {
        return;
    }
}
