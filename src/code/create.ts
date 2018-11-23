import * as http from "http";
import { Global } from "./global";
import { Util } from "./util";
import { RequestHandler } from "./request_handler";
import { MemorySessionProvider } from "./memory_session_provider";
import { GenericSessionProvider } from "./model/generic_session_provider";
import { ErrorHandler } from "./model";
import { AppOption } from "./types/app_option";
import { LogHelper } from "./helpers/log_helper";
import { ERROR_TYPE } from "./enums/error_type";
import { __AppName } from "./constant";
import { EtagOption } from "./types/etag_option";
import { ETag_Type } from "./enums/etag_type";

let app: http.Server;

export const getApp = () => {
    return app;
};

export const create = (option: AppOption) => {
    const defaultEtagConfig = {
        type: ETag_Type.Weak
    } as EtagOption
    if (!Util.isNull(option)) {
        Global.port = Util.isNull(option.port) ? 4000 : option.port;
        Global.viewEngine = option.viewEngine == null ? null : new (option.viewEngine as any)();
        Global.shouldParseCookie = Util.isNull(option.shouldParseCookie) ? true : option.shouldParseCookie;
        Global.shouldParsePost = Util.isNull(option.shouldParsePost) ? true : option.shouldParsePost;
        Global.sessionProvider = Util.isNull(option.sessionProvider) ? MemorySessionProvider as any : option.sessionProvider as typeof GenericSessionProvider;
        Global.sessionTimeOut = Util.isNull(option.sessionTimeOut) ? 60 : option.sessionTimeOut;
        Global.foldersAllowed = Util.isNull(option.foldersAllowed) ? [] : option.foldersAllowed;
        Global.errorHandler = Util.isNull(option.errorHandler) ? ErrorHandler : option.errorHandler;
        Global.defaultPath = Util.isNull(option.defaultPath) === true ? "" : "/" + option.defaultPath.toLowerCase();
        Global.appName = Util.isNullOrEmpty(option.appName) === true ? __AppName : option.appName;
        Global.eTag = option.eTag == null ? defaultEtagConfig : option.eTag;
    }
    else {
        Global.port = 4000;
        Global.shouldParseCookie = true;
        Global.shouldParsePost = true;
        Global.sessionProvider = MemorySessionProvider as any;
        Global.sessionTimeOut = 60;
        Global.foldersAllowed = [];
        Global.walls = [];
        Global.errorHandler = ErrorHandler;
        Global.eTag = option.eTag == null ? defaultEtagConfig : option.eTag;
    }
    app = http.createServer((req, res) => {
        new RequestHandler(req, res).handle();
    }).listen(Global.port).once("error", (err) => {
        if ((err as any).code === 'EADDRINUSE') {
            new LogHelper(ERROR_TYPE.PortInUse, Global.port).throw();
        }
        else {
            throw err;
        }
    });
}

