import * as http from "http";
import { GenericSessionProvider } from "./model/generic_session_provider";
import { GenericWall } from "./model/generic_wall";
import { ViewEngine } from "./abstracts/view_engine";
import { ErrorHandler } from "./model/error_handler";

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
    static foldersAllowed: string[];
    static walls: typeof GenericWall[] = [];
    static errorHandler: typeof ErrorHandler;
    static defaultPath?: string;
}