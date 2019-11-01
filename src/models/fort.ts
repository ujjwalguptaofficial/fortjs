import { ParentRoute, AppOption, EtagOption } from "../types";
import { Wall, ViewEngine, SessionProvider, XmlParser } from "../abstracts";
import { RouteHandler, RequestHandler } from "../handlers";
import { FortGlobal } from "../fort_global";
import { MemorySessionProvider, MustacheViewEngine } from "../extra";
import { ErrorHandler } from ".";
import { __AppName } from "../constant";
import * as http from "http";
import { ETag_Type, ERROR_TYPE } from "../enums";
import { LogHelper, promise, removeLastSlash, removeFirstSlash } from "../helpers";
import { GenericSessionProvider, GenericXmlParser, GenericController } from "../generics";
import { isNull, isNullOrEmpty, isArray } from "../utils";
import { Logger } from "./logger";

export class Fort {

    logger: Logger;
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

        FortGlobal.port = option.port == null ? 4000 : option.port;
        FortGlobal.shouldParseCookie = option.shouldParseCookie == null ? true : option.shouldParseCookie;
        FortGlobal.shouldParsePost = isNull(option.shouldParsePost) ? true : option.shouldParsePost;
        FortGlobal.sessionTimeOut = isNull(option.sessionTimeOut) ? 60 : option.sessionTimeOut;
        FortGlobal.folders = option.folders == null ? [] : option.folders;
        if (isArray(FortGlobal.folders) === false) {
            throw new Error(`Option folders should be an array`);
        }
        FortGlobal.appName = isNullOrEmpty(option.appName) === true ? __AppName : option.appName;
        FortGlobal.appSessionIdentifier = `${FortGlobal.appName}_session_id`;
        FortGlobal.eTag = isNull(option.eTag) ? defaultEtagConfig : option.eTag;
        FortGlobal.walls = this.walls as any;
        FortGlobal.viewEngine = isNull(this.viewEngine) ? new MustacheViewEngine() : new (this.viewEngine as any)();
        FortGlobal.sessionProvider = isNull(this.sessionProvider) ? MemorySessionProvider as any :
            this.sessionProvider as typeof GenericSessionProvider;
        FortGlobal.errorHandler = isNull(this.errorHandler) ? ErrorHandler : this.errorHandler;
        FortGlobal.xmlParser = isNull(this.xmlParser) ? GenericXmlParser : this.xmlParser;
        FortGlobal.viewPath = isNull(option.viewPath) ? "views" : option.viewPath;
        if (this.logger) {
            if (typeof this.logger === 'function') {
                this.logger = new (this as any).logger();
            }
        }
        else {
            this.logger = new Logger();
        }
        FortGlobal.logger = this.logger;
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
                    const error = new LogHelper(ERROR_TYPE.PortInUse, FortGlobal.port).get();
                    rej(error);
                }
                else {
                    rej(err);
                }
            }).once('listening', () => {
                res();
            }).listen(FortGlobal.port);
        });
    }

    destroy(): Promise<void> {
        return promise((res, rej) => {
            this.httpServer.close(res);
        });
    }

}
