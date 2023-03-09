import { ParentRoute, EtagOption, FolderMap } from "../types";
import { Wall, ViewEngine, SessionProvider, XmlParser, ResultMapper } from "../abstracts";
import { RouteHandler, RequestHandler } from "../handlers";
import { FortGlobal } from "../fort_global";
import { ErrorHandler } from ".";
import * as http from "http";
import { ERROR_TYPE } from "../enums";
import { LogHelper, promise, removeLastSlash, removeFirstSlash, setResultMapper } from "../helpers";
import { GenericSessionProvider, GenericController } from "../generics";
import { isArray } from "../utils";
import { Logger } from "./logger";
import { ComponentOption } from "../abstracts/component_option";

export class Fort {

    static set logger(value) {
        FortGlobal.logger = typeof value === 'function' ? new (this as any).value() :
            value;
    }

    static get logger(): Logger {
        return FortGlobal.logger;
    }

    static set walls(walls: Array<typeof Wall>) {
        FortGlobal.walls = walls as any;
    }


    /**
     * port at which app will listen, default - 4000
     *
     * @static
     * @memberof Fort
     */
    static set port(value: number) {
        FortGlobal.port = value;
    }

    static get port() {
        return FortGlobal.port;
    }

    /**
     * typeof ErrorHandler
     *
     * @static
     * @memberof Fort
     */
    static set errorHandler(value: typeof ErrorHandler) {
        FortGlobal.errorHandler = value;
    }

    static set routes(value: ParentRoute[]) {
        if (value == null) {
            value = [];
        }
        let isDefaultRouteExist = false;
        // removing / from routes
        value.forEach(route => {
            // route.path = removeFirstSlash(route.path);
            route.path = removeLastSlash(route.path);
            RouteHandler.addToRouterCollection(route);
            if (route.path === "/*") {
                RouteHandler.defaultRouteControllerName = route.controller.name;
                isDefaultRouteExist = true;
            }
        });
        if (isDefaultRouteExist === false) {
            RouteHandler.defaultRouteControllerName = GenericController.name;
            RouteHandler.addToRouterCollection({
                controller: GenericController,
                path: "/*"
            });
        }
    }

    /**
     * view engine use to render the view
     *
     * @static
     * @memberof Fort
     */
    static set viewEngine(value: typeof ViewEngine) {
        FortGlobal.viewEngine = new (value as any)();
    }

    /**
     * sessionProvider class, default - MemorySessionProvider
     *
     * @static
     * @memberof Fort
     */
    static set sessionProvider(value: typeof SessionProvider) {
        FortGlobal.sessionProvider = value as typeof GenericSessionProvider;
    }

    static set resultMapper(value: typeof ResultMapper) {
        setResultMapper(value);
    }

    /**
     * XmlParser class - used to parse the xml 
     *
     * @static
     * @memberof Fort
     */
    static set xmlParser(xmlParser: typeof XmlParser) {
        FortGlobal.xmlParser = xmlParser;
    }

    /**
     * Whether to parse cookie or not, default - true
     * If false, then session wont work.
     *
     * @static
     * @memberof Fort
     */
    static set shouldParseCookie(value: boolean) {
        FortGlobal.shouldParseCookie = value;
    }

    /**
     * Whether to parse the post data, default - true
     *
     * @static
     * @memberof Fort
     */
    static set shouldParsePost(value: boolean) {
        FortGlobal.shouldParsePost = value;
    }

    /**
     * session timeout in minute - default is 60 minute
     *
     * @static
     * @memberof Fort
     */
    static set sessionTimeOut(value: number) {
        FortGlobal.sessionTimeOut = value;
    }

    /**
     * name of application - default is fort. Visible in header and cookie.
     * Change name if you dont want any one to know the framework name.
     *
     * @static
     * @memberof Fort
     */
    static set appName(value: string) {
        FortGlobal.appName = value;
    }

    /**
     * Views folder location. By default it is - views.
     *
     * @static
     * @memberof Fort
     */
    static set viewPath(value: string) {
        FortGlobal.viewPath = value;
    }

    static set componentOption(value: typeof ComponentOption) {
        FortGlobal.componentOption = new value();
    }

    static get httpServer() {
        return Fort.instance.httpServer;
    }

    static set httpServer(value: http.Server) {
        Fort.instance.httpServer = value;
    }

    /**
     * folders which should be visible to requests. By default nothing is allowed.
     *
     * @static
     * @memberof Fort
     */
    static set folders(value: FolderMap[]) {
        value = value || [];
        if (isArray(value) === false) {
            throw new Error(`folders should be an array`);
        }

        // remove / from files routes
        value.forEach(folder => {
            const length = folder.alias.length;
            if (length > 1) {
                folder.alias = removeFirstSlash(folder.alias);
                folder.alias = removeLastSlash(folder.alias);
            }
        });

        FortGlobal.folders = value;
    }

    /**
     * eTag Settings
     *
     * @static
     * @memberof Fort
     */
    static set eTag(value: EtagOption) {
        FortGlobal.eTag = value;
    }

    static instance = new Fort();

    // eslint-disable-next-line
    private constructor() {

    }

    private httpServer: http.Server;

    static create(): Promise<void> {
        FortGlobal.setDefault();

        if (this.instance.httpServer != null) {
            return;
        }
        return promise((res, rej) => {
            this.instance.httpServer = http.createServer(Fort.onNewRequest).once("error", (err) => {
                if ((err as any).code === 'EADDRINUSE') {
                    const error = new LogHelper(ERROR_TYPE.PortInUse, FortGlobal.port).get();
                    rej(error);
                }
                else {
                    rej(err);
                }
            }).once('listening', () => {
                // set default route
                // RouteHandler.defaultRouteControllerName = RouteHandler.getDefaultRoute();
                res();
            }).listen(FortGlobal.port);
        });
    }

    static onNewRequest(request, response) {
        new RequestHandler(request, response).handle();
    }

    static destroy(): Promise<void> {
        return promise((res) => {
            this.instance.httpServer.close(res);
        });
    }

}
