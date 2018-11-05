import * as http from "http";
import { ViewEngine } from "./model/view_engine";
import { SessionProvider } from "./abstracts/session_provider";
import { GenericSessionProvider } from "./model/generic_session_provider";

export class Global {
    static request: http.IncomingMessage;
    static response: http.ServerResponse;
    static port: number;
    static viewPath: string;
    static shouldParseCookie: boolean;
    static shouldParsePost: boolean;
    static sessionProvider: typeof GenericSessionProvider;
    static sessionTimeOut?: number;
    static viewEngine: ViewEngine;

}