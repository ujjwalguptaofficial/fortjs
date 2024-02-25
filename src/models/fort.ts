import { TSessionStore, TXmlParser, TErrorHandler, TWall, TShield, TGuard } from "../types";
import { ViewEngine, ResultMapper, Controller, ComponentOption } from "../abstracts";
import { RouteHandler, RequestHandler } from "../handlers";
import { FORT_GLOBAL } from "../constants/fort_global";
import * as http from "http";
import { ERROR_TYPE } from "../enums";
import { LogHelper, promise, removeLastSlash, removeFirstSlash, setResultMapper } from "../helpers";
import { TaskSchedulerManager, isArray } from "../utils";
import { Logger } from "./logger";
import { IDTOValidator, IEtagOption, IFolderMap, IControllerRoute, ICacheStore } from "../interfaces";

export class App {

    set logger(value) {
        FORT_GLOBAL.logger = typeof value === 'function' ? new (this as any).value() :
            value;
    }

    get logger(): Logger {
        return FORT_GLOBAL.logger;
    }

    set walls(walls: TWall[]) {
        FORT_GLOBAL.walls = walls;
    }

    get walls() {
        return FORT_GLOBAL.walls;
    }

    set shields(shields: TShield[]) {
        FORT_GLOBAL.addShields(shields);
    }

    set guards(guards: TGuard[]) {
        FORT_GLOBAL.addGuards(guards);
    }

    /**
     * port at which app will listen, default - 4000
     *
     * @
     * @memberof Fort
     */
    set port(value: number) {
        FORT_GLOBAL.port = value;
    }

    get port() {
        return FORT_GLOBAL.port;
    }

    /**
     * typeof ErrorHandler
     *
     * @
     * @memberof Fort
     */
    set errorHandler(value: TErrorHandler) {
        FORT_GLOBAL.errorHandler = value;
    }

    set routes(value: IControllerRoute[]) {
        if (value == null) {
            value = [];
        }
        let isDefaultRouteExist = false;

        function addChildRoute(route: IControllerRoute) {
            route.children && route.children.forEach(childrenRoute => {
                childrenRoute.path = removeFirstSlash(childrenRoute.path);
                childrenRoute.path = removeLastSlash(childrenRoute.path);
                addChildRoute(childrenRoute);
            });
        }

        // removing / from routes
        value.forEach(route => {
            // route.path = removeFirstSlash(route.path);
            route.path = removeLastSlash(route.path);
            addChildRoute(route);
            RouteHandler.addToRouterCollection(route);
            if (route.path === "/*") {
                RouteHandler.defaultRouteControllerName = route.controller.name;
                isDefaultRouteExist = true;
            }
        });
        if (isDefaultRouteExist === false) {
            class GenericController extends Controller {

            }
            RouteHandler.defaultRouteControllerName = GenericController.name;
            RouteHandler.addToRouterCollection({
                controller: GenericController,
                path: "/*",
                children: null
            });
        }
    }

    /**
     * view engine use to render the view
     *
     * @
     * @memberof Fort
     */
    set viewEngine(value: typeof ViewEngine) {
        FORT_GLOBAL.viewEngine = new (value as any)();
    }

    /**
     * sessionStore class, default - MemorySessionStore
     *
     * @
     * @memberof Fort
     */
    set sessionStore(value: TSessionStore) {
        FORT_GLOBAL.sessionStore = value;
    }

    set resultMapper(value: typeof ResultMapper) {
        setResultMapper(value);
    }

    /**
     * XmlParser class - used to parse the xml 
     *
     * @
     * @memberof Fort
     */
    set xmlParser(xmlParser: TXmlParser) {
        FORT_GLOBAL.xmlParser = xmlParser;
    }

    /**
     * Whether to parse cookie or not, default - true
     * If false, then session wont work.
     *
     * @
     * @memberof Fort
     */
    set shouldParseCookie(value: boolean) {
        FORT_GLOBAL.shouldParseCookie = value;
    }

    /**
     * Whether to parse the http body data in post request, default - true
     *
     * @
     * @memberof Fort
     */
    set shouldParseBody(value: boolean) {
        FORT_GLOBAL.shouldParseBody = value;
    }

    /**
     * session timeout in minute - default is 60 minute
     *
     * @
     * @memberof Fort
     */
    set sessionTimeOut(value: number) {
        FORT_GLOBAL.sessionTimeOut = value;
    }

    /**
     * name of application - default is fort. Visible in header and cookie.
     * Change name if you dont want any one to know the framework name.
     *
     * @
     * @memberof Fort
     */
    set appName(value: string) {
        FORT_GLOBAL.appName = value;
    }

    /**
     * Views folder location. By default it is - views.
     *
     * @
     * @memberof Fort
     */
    set viewPath(value: string) {
        FORT_GLOBAL.viewPath = value;
    }

    set componentOption(value: typeof ComponentOption) {
        FORT_GLOBAL.componentOption = new value();
    }

    /**
     * folders which should be visible to requests. By default nothing is allowed.
     *
     * @
     * @memberof Fort
     */
    set folders(value: IFolderMap[]) {
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

        FORT_GLOBAL.folders = value;
    }

    /**
     * eTag Settings
     *
     * @
     * @memberof Fort
     */
    set eTag(value: IEtagOption) {
        FORT_GLOBAL.eTag = value;
    }

    /**
     * keep alive timeout in millisecond for requests, default is 72000
     *
     * @
     * @memberof Fort
     */
    set keepAliveTimeout(value: number) {
        FORT_GLOBAL.keepAliveTimeout = value;
    }

    httpServer: http.Server;

    create(): Promise<void> {
        FORT_GLOBAL.setDefault();

        if (this.httpServer != null) {
            return;
        }
        return promise((res, rej) => {
            this.httpServer = http.createServer(this.onNewRequest).once("error", (err) => {
                if ((err as any).code === 'EADDRINUSE') {
                    const error = new LogHelper(ERROR_TYPE.PortInUse, FORT_GLOBAL.port).get();
                    rej(error);
                }
                else {
                    rej(err);
                }
            }).once('listening', () => {
                res();
            }).listen(FORT_GLOBAL.port);

            this.httpServer.keepAliveTimeout = FORT_GLOBAL.keepAliveTimeout;
        });
    }

    onNewRequest(request, response) {
        new RequestHandler(FORT_GLOBAL).handle(request, response);
    }

    destroy(): Promise<void> {
        this.scheduler.stopAll();
        return promise((res) => {
            this.httpServer.close(res);
        });
    }

    set validator(validator: IDTOValidator) {
        FORT_GLOBAL.validator = validator;
    }

    scheduler = new TaskSchedulerManager(FORT_GLOBAL);

    set useCache(value: boolean) {
        FORT_GLOBAL.shouldEnableCache = value
    }

    set cacheStore(store: ICacheStore) {
        FORT_GLOBAL.cacheStore = store;
    }
}

export const Fort = new App();