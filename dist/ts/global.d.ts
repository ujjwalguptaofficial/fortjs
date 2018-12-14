/// <reference types="node" />
import * as http from "http";
import { GenericSessionProvider } from "./model/generic_session_provider";
import { GenericWall } from "./model/generic_wall";
import { ViewEngine } from "./abstracts/view_engine";
import { ErrorHandler } from "./model/error_handler";
import { EtagOption } from "./types/etag_option";
import { PathMap } from "./types/path_map";
export declare class Global {
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
    static walls: Array<typeof GenericWall>;
    static errorHandler: typeof ErrorHandler;
    static defaultPath?: string;
    static connectonKeepAliveTimeout?: number;
    static appName?: string;
    static eTag?: EtagOption;
    static mappedPaths?: PathMap[];
}
