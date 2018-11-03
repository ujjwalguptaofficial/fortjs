import * as http from "http";
import { ViewEngine } from "./model/view_engine";
import { SessionProvider } from "./abstracts/session_provider";

export class Global {
    static request: http.IncomingMessage;
    static response: http.ServerResponse;
    static port: number;
    static viewPath: string;
    static shouldParseCookie: boolean;
    static shouldParsePost: boolean;
    static sessionProvider: SessionProvider;
    static sessionTimeOut?: number;
    static viewEngine: ViewEngine;

}