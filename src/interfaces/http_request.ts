import { HTTP_METHOD } from "../enums";
import * as net from "net";
import { IncomingHttpHeaders } from "http2";

export interface IHttpRequest {
    url: string;
    method: HTTP_METHOD;
    headers: IncomingHttpHeaders;
    connection: net.Socket;
}