import { ParentRoute, AppOption, EtagOption } from "../types";
import { Wall, ViewEngine, SessionProvider, XmlParser } from "../abstracts";
import { RouteHandler } from "../handlers";
import { Global } from "../global";
import { Util } from "../util";
import { MemorySessionProvider, MustacheViewEngine } from "../extra";
import { ErrorHandler } from ".";
import { __AppName } from "../constant";
import { RequestHandler } from "../handlers";
import * as http from "http";
import { ETag_Type, ERROR_TYPE } from "../enums";
import { LogHelper, promise } from "../helpers";
import { GenericSessionProvider } from "../generics";

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
        // removing / from routes
        this.routes.forEach(route => {
            if (route.path[0] === "/") {
                route.path = route.path.substr(1);
            }
            if (route.path[route.path.length - 1] === "/") {
                route.path = route.path.substr(0, route.path.length - 1);
            }
            RouteHandler.addControllerRoute(route);
        });

        // remove / from files routes
        option.folders.forEach(folder => {
            const length = folder.alias.length;
            if (folder.alias[0] === "/" && length > 1) {
                folder.alias = folder.alias.substr(1);
            }
            if (length > 1 && folder.alias[length - 1] === "/") {
                folder.alias = folder.alias.substr(0, length - 1);
            }
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