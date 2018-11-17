import * as http from "http";
import { Global } from "./global";
import { Util } from "./util";
import { RequestHandler } from "./request_handler";
import { MemorySessionProvider } from "./memory_session_provider";
import { GenericSessionProvider } from "./model/generic_session_provider";
import { GenericWall } from "./model/generic_wall";
import { ErrorHandler } from "./model";
import { AppOption } from "./types/app_option";
import { LogHelper } from "./helpers/log_helper";
import { ERROR_TYPE } from "./enums/error_type";

export let app: http.Server;
export const create = (option: AppOption) => {
    if (!Util.isNull(option)) {
        Global.port = Util.isNull(option.port) ? 4000 : option.port;
        Global.viewEngine = new (option.viewEngine as any)();
        Global.shouldParseCookie = Util.isNull(option.shouldParseCookie) ? true : option.shouldParseCookie;
        Global.shouldParsePost = Util.isNull(option.shouldParsePost) ? true : option.shouldParsePost;
        Global.sessionProvider = Util.isNull(option.sessionProvider) ? MemorySessionProvider as any : option.sessionProvider as typeof GenericSessionProvider;
        Global.sessionTimeOut = Util.isNull(option.sessionTimeOut) ? 60 : option.sessionTimeOut;
        Global.foldersAllowed = Util.isNull(option.foldersAllowed) ? [] : option.foldersAllowed;
        Global.errorHandler = Util.isNull(option.errorHandler) ? ErrorHandler : option.errorHandler;
        Global.defaultPath = Util.isNull(option.defaultPath) === true ? "" : "/" + option.defaultPath.toLowerCase();
        Global.connectonKeepAliveTimeout = option.connectonKeepAliveTimeout == null ? 5000 : option.connectonKeepAliveTimeout;

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
    }
    app = http.createServer((req, res) => {
        new RequestHandler(req, res).handle();
    }).listen(Global.port).once("error", (err) => {
        if ((err as any).code === 'EADDRINUSE') {
            throw new LogHelper(ERROR_TYPE.PortInUse).get();
        }
        else {
            throw err;
        }
    });
    app.keepAliveTimeout = Global.connectonKeepAliveTimeout;
}

