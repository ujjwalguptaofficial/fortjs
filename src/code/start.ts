import * as http from "http";
import { Global } from "./global";
import { Util } from "./util";
import { RequestHandler } from "./request_handler";
import { IAppOption } from "./interfaces/app_option";
import { MemorySessionProvider } from "./memory_session_provider";
import { GenericSessionProvider } from "./model/generic_session_provider";


export function start(option: IAppOption) {
    if (!Util.isNull(option)) {
        Global.port = Util.isNull(option.port) ? 4000 : option.port;
        Global.viewEngine = option.viewEngine;
        Global.shouldParseCookie = Util.isNull(option.shouldParseCookie) ? true : option.shouldParseCookie;
        Global.shouldParsePost = Util.isNull(option.shouldParsePost) ? true : option.shouldParsePost;
        Global.sessionProvider = Util.isNull(option.sessionProvider) ? new (MemorySessionProvider as any)() : option.sessionProvider;
        Global.sessionTimeOut = Util.isNull(option.sessionTimeOut) ? 60 : option.sessionTimeOut;
    }
    http.createServer((req, res) => {
        new RequestHandler(req, res).handle();
    }).listen(Global.port);
}

