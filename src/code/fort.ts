import { Router } from "./types/router";
import { FortWall } from "./abstracts";
import { AppOption } from "./types";
import { RouteHandler } from "./route_handler";
import { Global } from "./global";
import { Util } from "./util";
import { MemorySessionProvider } from "./memory_session_provider";
import { ErrorHandler } from "./model/error_handler";
import { __AppName } from "./constant";
import { RequestHandler } from "./request_handler";
import * as http from "http";
import { EtagOption } from "./types/etag_option";
import { ETag_Type } from "./enums/etag_type";
import { LogHelper } from "./helpers/log_helper";
import { ERROR_TYPE } from "./enums/error_type";
import { GenericSessionProvider } from "./model/generic_session_provider";
import { promise } from "./helpers/promise";

export class Fort {
    routers: Router[] = [];
    walls: typeof FortWall[] = [];
    httpServer: http.Server;

    create(option: AppOption) {
        if (option.defaultPath[0] === "/") {
            option.defaultPath = option.defaultPath.substr(1);
        }
        this.routers.forEach(route => {
            if (route.path[0] === "/") {
                route.path = route.path.substr(1);
            }
            RouteHandler.addToRouterCollection(route);
        });
        const defaultEtagConfig = {
            type: ETag_Type.Weak
        } as EtagOption
        if (option != null) {
            Global.port = Util.isNull(option.port) ? 4000 : option.port;
            Global.viewEngine = option.viewEngine == null ? null : new (option.viewEngine as any)();
            Global.shouldParseCookie = Util.isNull(option.shouldParseCookie) ? true : option.shouldParseCookie;
            Global.shouldParsePost = Util.isNull(option.shouldParsePost) ? true : option.shouldParsePost;
            Global.sessionProvider = Util.isNull(option.sessionProvider) ? MemorySessionProvider as any :
                option.sessionProvider as typeof GenericSessionProvider;
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
        this.httpServer = http.createServer((req, res) => {
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

    async destroy() {
        return promise((res, rej) => {
            this.httpServer.close(res);
        });
    }
}