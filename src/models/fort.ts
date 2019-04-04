import { ParentRoute } from "../types/route";
import { Wall, ViewEngine, SessionProvider } from "../abstracts";
import { AppOption } from "../types";
import { RouteHandler } from "../handlers/route_handler";
import { Global } from "../global";
import { Util } from "../util";
import { MemorySessionProvider } from "../extra/memory_session_provider";
import { ErrorHandler } from "./error_handler";
import { __AppName } from "../constant";
import { RequestHandler } from "../handlers/request_handler";
import * as http from "http";
import { EtagOption } from "../types/etag_option";
import { ETag_Type } from "../enums/etag_type";
import { LogHelper } from "../helpers/log_helper";
import { ERROR_TYPE } from "../enums/error_type";
import { GenericSessionProvider } from "./generic_session_provider";
import { promise } from "../helpers/promise";
import { XmlParser } from "../abstracts/xml_parser";
import { MustacheViewEngine } from "../extra";

export class Fort {
    routes: ParentRoute[] = [];
    walls: Array<typeof Wall> = [];
    httpServer: http.Server;

    /**
     * view engine use to render the view
     *
     * @type {typeof ViewEngine}
     * @memberof Fort
     */
    viewEngine?: typeof ViewEngine;

    /**
     * sessionProvider class, default - MemorySessionProvider
     *
     * @type {typeof SessionProvider}
     */
    sessionProvider?: typeof SessionProvider;

    /**
     * Custom error handler class
     *
     * @type {typeof ErrorHandler}
     */
    errorHandler?: typeof ErrorHandler;

    /**
     * XmlParser class - used to parse the xml 
     *
     * @type {typeof XmlParser}
     * @memberof Fort
     */
    xmlParser?: typeof XmlParser;

    private isArray_(value) {
        return Util.isArray(value);
    }

    private saveAppOption_(option: AppOption) {
        const defaultEtagConfig = {
            type: ETag_Type.Weak
        } as EtagOption;

        Global.port = option.port == null ? 4000 : option.port;
        Global.shouldParseCookie = option.shouldParseCookie == null ? true : option.shouldParseCookie;
        Global.shouldParsePost = Util.isNull(option.shouldParsePost) ? true : option.shouldParsePost;
        Global.sessionTimeOut = Util.isNull(option.sessionTimeOut) ? 60 : option.sessionTimeOut;
        Global.folders = option.folders == null ? [] : option.folders;
        if (this.isArray_(Global.folders) === false) {
            throw new Error(`Option folders should be an array`);
        }
        Global.defaultPath = Util.isNull(option.defaultPath) === true ? "" : "/" + option.defaultPath.toLowerCase();
        Global.appName = Util.isNullOrEmpty(option.appName) === true ? __AppName : option.appName;
        Global.appSessionIdentifier = `${Global.appName}_session_id`;
        Global.eTag = option.eTag == null ? defaultEtagConfig : option.eTag;
        Global.walls = this.walls as any;
        Global.viewEngine = this.viewEngine == null ? new MustacheViewEngine() : new (this.viewEngine as any)();
        Global.sessionProvider = this.sessionProvider == null ? MemorySessionProvider as any :
            this.sessionProvider as typeof GenericSessionProvider;
        Global.errorHandler = this.errorHandler == null ? ErrorHandler : this.errorHandler;
        Global.xmlParser = this.xmlParser;
        Global.viewPath = option.viewPath == null ? "views" : option.viewPath;
    }

    create(option: AppOption): Promise<void> {
        if (option == null) {
            option = {

            };
        }

        if (option.defaultPath != null && option.defaultPath[0] === "/") {
            option.defaultPath = option.defaultPath.substr(1);
        }

        if (this.routes == null) {
            this.routes = [];
        }
        this.routes.forEach(route => {
            if (route.path[0] === "/") {
                route.path = route.path.substr(1);
            }
            RouteHandler.addToRouterCollection(route);
        });

        this.saveAppOption_(option);
        return promise((res, rej) => {
            this.httpServer = http.createServer((request, response) => {
                new RequestHandler(request, response).handle();
            }).once("error", (err) => {
                if ((err as any).code === 'EADDRINUSE') {
                    const error = new LogHelper(ERROR_TYPE.PortInUse, Global.port).get();
                    rej(error);
                }
                else {
                    rej(err);
                }
            }).once('listening', res).listen(Global.port);
        });
    }

    destroy(): Promise<void> {
        return promise((res, rej) => {
            this.httpServer.close(res);
        });
    }

}