import { TSessionStore, TXmlParser, TErrorHandler, TWall, TShield, TGuard, TTaskScheduler } from "../types";
import { ViewEngine, ResultMapper, Controller, ComponentOption } from "../abstracts";
import { RouteHandler, RequestHandler } from "../handlers";
import * as http from "http";
import { ERROR_TYPE, ETAG_TYPE } from "../enums";
import { LogHelper, promise, removeLastSlash, removeFirstSlash, setResultMapper } from "../helpers";
import { CacheManager, TaskSchedulerManager, isArray } from "../utils";
import { Logger } from "./logger";
import { IDTOValidator, IEtagOption, IFolderMap, IControllerRoute, ICacheStore, IScheduleTaskInput } from "../interfaces";
import { APP_NAME, CURRENT_PATH } from "../constants";
import { BlankXmlParser, CacheGuard, CacheWall, CookieEvaluatorWall, DefaultCronJobScheduler, MemoryCacheStore, MemorySessionStore, PostDataEvaluatorGuard } from "../providers";
import { DtoValidator, MustacheViewEngine } from "../extra";
import { ErrorHandler } from "./error_handler";

export class App {
    private logger_: Logger;
    private viewEngine_: ViewEngine;

    /**
     * sessionStore class, default - MemorySessionStore
     *
     * @type {TSessionStore}
     * @memberof App
     */
    sessionStore: TSessionStore;

    /**
     * XmlParser class - used to parse the xml 
     *
     * @type {TXmlParser}
     * @memberof App
     */
    xmlParser: TXmlParser;

    /**
     * Whether to parse cookie or not, default - true
     * If false, then session wont work.
     *
     * @type {boolean}
     * @memberof App
     */
    shouldParseCookie = true;

    /**
     * Whether to parse the http body data in post request, default - true
     *
     * @type {boolean}
     * @memberof App
     */
    shouldParseBody = true;

    /**
     * session timeout in minute - default is 60 minute
     *
     * @type {number}
     * @memberof App
     */
    sessionTimeOut = 60;

    /**
     *  name of application - default is fort. Visible in header and cookie.
     * Change name if you dont want any one to know the framework name.
     *
     * @type {string}
     * @memberof App
     */
    appName: string;

    /**
     * Views folder location. By default it is - views.
     *
     * @type {string}
     * @memberof App
     */
    viewPath: string;

    private componentOption_ = new ComponentOption();
    private cacheManager_: CacheManager;
    walls: TWall[] = [];

    /**
     * keep alive timeout in millisecond for requests, default is 72000
     *
     * @memberof App
     */
    keepAliveTimeout = 30000;

    /**
     * eTag Settings
     *
     * @type {IEtagOption}
     * @memberof App
     */
    eTag: IEtagOption;

    private folders_: IFolderMap[] = [];

    set logger(value) {
        this.logger_ = typeof value === 'function' ? new (this as any).value() :
            value;
    }

    get logger(): Logger {
        return this.logger_;
    }

    shields: TShield[] = [];
    guards: TGuard[] = [];

    /**
     * port at which app will listen, default - 4000
     *
     * @private
     * @memberof App
     */
    port = 4000;

    errorHandler: TErrorHandler;
    private appSessionIdentifier_: string;

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
        this.viewEngine_ = new (value as any)();
    }

    set resultMapper(value: typeof ResultMapper) {
        setResultMapper(value);
    }

    set componentOption(value: typeof ComponentOption) {
        this.componentOption_ = new value();
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

        this.folders_ = value;
    }

    httpServer: http.Server;

    create(): Promise<void> {
        const setDefault = () => {

            this.viewPath = this.viewPath || CURRENT_PATH;
            this.logger = this.logger || new Logger();

            this.sessionStore = this.sessionStore || MemorySessionStore;
            this.cacheStore = this.cacheStore || new MemoryCacheStore();
            this.xmlParser = this.xmlParser || BlankXmlParser;
            this.viewEngine_ = this.viewEngine_ || new MustacheViewEngine();
            this.appName = this.appName || APP_NAME;

            if (this.eTag == null) {
                this.eTag = {
                    type: ETAG_TYPE.Weak
                } as IEtagOption;
            }
            this.errorHandler = this.errorHandler || ErrorHandler;
            this.validator = this.validator || new DtoValidator();
            this.appSessionIdentifier_ = `${this.appName}_session_id`;

            if (this.shouldParseCookie === true) {
                this.walls.unshift(
                    CookieEvaluatorWall
                );
            }

            if (this.useCache === true) {
                this.walls.push(
                    CacheWall
                );
                this.guards.push(CacheGuard);
                this.cacheManager_ = new CacheManager(
                    this.cacheStore
                );
            }

            if (this.shouldParseBody === true) {
                this.guards.unshift(
                    PostDataEvaluatorGuard as any
                );
            }

            const shouldEnableCache = this.useCache;
            // add global shields
            RouteHandler.routerCollection.forEach((route) => {
                route.shields = this.shields.concat(route.shields);
                route.workers.forEach((worker) => {
                    worker.guards = this.guards.concat(worker.guards);
                    if (shouldEnableCache === true) {
                        worker.guards.push(CacheGuard)
                    }
                })
            });
        }

        setDefault();

        if (this.httpServer != null) {
            return;
        }
        return promise((res, rej) => {
            this.httpServer = http.createServer(this.onNewRequest).once("error", (err) => {
                if ((err as any).code === 'EADDRINUSE') {
                    const error = new LogHelper(ERROR_TYPE.PortInUse, this.port).get();
                    rej(error);
                }
                else {
                    rej(err);
                }
            }).once('listening', () => {
                res();
            }).listen(this.port);

            this.httpServer.keepAliveTimeout = this.keepAliveTimeout;
        });
    }

    onNewRequest = (request, response) => {
        new RequestHandler(this).handle(request, response);
    }

    destroy(): Promise<void> {
        this.scheduler.stopAll();
        return promise((res, rej) => {
            this.httpServer.close((err: any) => {
                if (err) {
                    rej(err);
                }
                else {
                    res();
                }
            });
        });
    }

    validator: IDTOValidator;
    crons: IScheduleTaskInput[] = [];
    scheduler = new TaskSchedulerManager(this);
    useCache: boolean;
    cacheStore: ICacheStore;
    cronJobScheduler: TTaskScheduler = DefaultCronJobScheduler;
}

export const Fort = new App();