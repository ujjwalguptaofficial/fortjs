import { OutgoingHttpHeader, OutgoingHttpHeaders } from "http";

export interface IHttpResponse {
    setHeader(name: string, value: number | string | string[]): void;
    getHeader(name: string): number | string | string[] | undefined;
    getHeaders(): OutgoingHttpHeaders;
    getHeaderNames(): string[];
    hasHeader(name: string): boolean;
    removeHeader(name: string): void;
    statusCode: number;

    /* Attempting to set a header field name or value that contains invalid characters
    * will result in a`TypeError` being thrown.
    * @since v0.1.30
    */
    writeHead(
        statusCode: number,
        statusMessage?: string,
        headers?: OutgoingHttpHeaders | OutgoingHttpHeader[],
    ): this;
    writeHead(statusCode: number, headers?: OutgoingHttpHeaders | OutgoingHttpHeader[]): this;

    end(): void;
}
