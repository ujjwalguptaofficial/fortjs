import { HTTP_METHOD } from "../enums";
import * as net from "net";

export interface IHttpRequest {
    url: string;
    method: HTTP_METHOD;
    headers: object;
    connection: net.Socket;
}