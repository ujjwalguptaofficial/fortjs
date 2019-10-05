import { HTTP_METHOD } from "../enums";
import * as net from "net";
import { IncomingHttpHeaders } from "http2";

export type HttpRequest = {
    url?: string;
    method?: HTTP_METHOD;
    headers: IncomingHttpHeaders;
    connection?: net.Socket;
};