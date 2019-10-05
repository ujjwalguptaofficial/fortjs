import { HttpResponse } from "../types";
export declare class HttpResponseStub implements HttpResponse {
    private headers_;
    constructor(headers: any);
    getHeader(name: string): any;
    hasHeader(name: string): boolean;
    setHeader(name: string, value: number | string | string[]): void;
    getHeaders(): any;
    getHeaderNames(): string[];
    removeHeader(name: string): void;
}
