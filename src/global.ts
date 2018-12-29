import * as http from "http";
import { GenericSessionProvider } from "./models/generic_session_provider";
import { GenericWall } from "./models/generic_wall";
import { ViewEngine } from "./abstracts/view_engine";
import { ErrorHandler } from "./models/error_handler";
import { EtagOption } from "./types/etag_option";
import { FolderMap } from "./types/folder_map";

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
    static walls: Array<typeof GenericWall> = [];
    static errorHandler: typeof ErrorHandler;
    static defaultPath?: string;
    static connectonKeepAliveTimeout?: number;

    static appName?: string;

    static eTag?: EtagOption;

    static folders?: FolderMap[];
    static appSessionIdentifier: string;
}