import { ParentRoute, AppOption, EtagOption } from "../types";
import { Wall, ViewEngine, SessionProvider, XmlParser } from "../abstracts";
import { RouteHandler } from "../handlers";
import { Global } from "../global";
import { MemorySessionProvider, MustacheViewEngine } from "../extra";
import { ErrorHandler } from ".";
import { __AppName } from "../constant";
import { RequestHandler } from "../handlers";
import * as http from "http";
import { ETag_Type, ERROR_TYPE } from "../enums";
import { LogHelper, promise, removeLastSlash, removeFirstSlash } from "../helpers";
import { GenericSessionProvider, GenericXmlParser, GenericController } from "../generics";
import { isNull, isNullOrEmpty } from "../utils";
import { isArray } from "util";

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

    private saveAppOption_(option: AppOption) {
        const defaultEtagConfig = {
            type: ETag_Type.Weak
        } as EtagOption;

        Global.port = option.port == null ? 4000 : option.port;
        Global.shouldParseCookie = option.shouldParseCookie == null ? true : option.shouldParseCookie;
        Global.shouldParsePost = isNull(option.shouldParsePost) ? true : option.shouldParsePost;
        Global.sessionTimeOut = isNull(option.sessionTimeOut) ? 60 : option.sessionTimeOut;
        Global.folders = option.folders == null ? [] : option.folders;
        if (isArray(Global.folders) === false) {
            throw new Error(`Option folders should be an array`);
        }
        Global.appName = isNullOrEmpty(option.appName) === true ? __AppName : option.appName;
        Global.appSessionIdentifier = `${Global.appName}_session_id`;
        Global.eTag = isNull(option.eTag) ? defaultEtagConfig : option.eTag;
        Global.walls = this.walls as any;
        Global.viewEngine = isNull(this.viewEngine) ? new MustacheViewEngine() : new (this.viewEngine as any)();
        Global.sessionProvider = isNull(this.sessionProvider) ? MemorySessionProvider as any :
            this.sessionProvider as typeof GenericSessionProvider;
        Global.errorHandler = isNull(this.errorHandler) ? ErrorHandler : this.errorHandler;
        Global.xmlParser = isNull(this.xmlParser) ? GenericXmlParser : this.xmlParser;
        Global.viewPath = isNull(option.viewPath) ? "views" : option.viewPath;
    }

    create(option?: AppOption): Promise<void> {
        if (option == null) {
            option = {

            };
        }

        if (this.routes == null) {
            this.routes = [];
        }
        let isDefaultRouteExist = false;
        // removing / from routes
        this.routes.forEach(route => {
            route.path = removeFirstSlash(route.path);
            route.path = removeLastSlash(route.path);
            if (route.path === "*") {
                isDefaultRouteExist = true;
            }
            RouteHandler.addToRouterCollection(route);
        });
        if (isDefaultRouteExist === false) {
            RouteHandler.addToRouterCollection({
                controller: GenericController,
                path: "*"
            });
        }
        if (option.folders != null) {
            // remove / from files routes
            option.folders.forEach(folder => {
                const length = folder.alias.length;
                if (length > 1) {
                    folder.alias = removeFirstSlash(folder.alias);
                    folder.alias = removeLastSlash(folder.alias);
                }

            });
        }

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
            }).once('listening', () => {
                res();
            }).listen(Global.port);
        });
    }

    destroy(): Promise<void> {
        return promise((res, rej) => {
            this.httpServer.close(res);
        });
    }

}
