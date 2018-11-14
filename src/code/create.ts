import * as http from "http";
import { Global } from "./global";
import { Util } from "./util";
import { RequestHandler } from "./request_handler";
import { IAppOption } from "./interfaces/app_option";
import { MemorySessionProvider } from "./memory_session_provider";
import { GenericSessionProvider } from "./model/generic_session_provider";
import { GenericWall } from "./model/generic_wall";
import { ErrorHandler } from "./model";

export let app: http.Server;
export function create(option: IAppOption) {
    if (!Util.isNull(option)) {
        Global.port = Util.isNull(option.port) ? 4000 : option.port;
        Global.viewEngine = new (option.viewEngine as any)();
        Global.shouldParseCookie = Util.isNull(option.shouldParseCookie) ? true : option.shouldParseCookie;
        Global.shouldParsePost = Util.isNull(option.shouldParsePost) ? true : option.shouldParsePost;
        Global.sessionProvider = Util.isNull(option.sessionProvider) ? MemorySessionProvider as any : option.sessionProvider as typeof GenericSessionProvider;
        Global.sessionTimeOut = Util.isNull(option.sessionTimeOut) ? 60 : option.sessionTimeOut;
        Global.foldersAllowed = Util.isNull(option.foldersAllowed) ? [] : option.foldersAllowed;
        Global.walls = Util.isNull(option.walls) ? [] : option.walls as typeof GenericWall[];
        Global.errorHandler = Util.isNull(option.errorHandler) ? ErrorHandler : option.errorHandler;
        Global.defaultPath = Util.isNull(option.defaultPath) === true ? "" : "/" + option.defaultPath.toLowerCase();
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
        console.log("errcode", (err as any).code);
        console.log("err", err);
        throw err;
    });
}

