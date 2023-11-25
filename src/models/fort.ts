import { TSessionStore, TXmlParser, TErrorHandler, TWall, TShield, TGuard } from "../types";
import { ViewEngine, ResultMapper, Controller, ComponentOption } from "../abstracts";
import { RouteHandler, RequestHandler } from "../handlers";
import { FORT_GLOBAL } from "../constants/fort_global";
import * as http from "http";
import { ERROR_TYPE } from "../enums";
import { LogHelper, promise, removeLastSlash, removeFirstSlash, setResultMapper } from "../helpers";
import { isArray } from "../utils";
import { Logger } from "./logger";
import { IDtoValidator, IEtagOption, IFolderMap, IControllerRoute } from "../interfaces";

export class Fort {

    static set logger(value) {
        FORT_GLOBAL.logger = typeof value === 'function' ? new (this as any).value() :
            value;
    }

    static get logger(): Logger {
        return FORT_GLOBAL.logger;
    }

    static set walls(walls: TWall[]) {
        FORT_GLOBAL.walls = walls;
    }

    static get walls() {
        return FORT_GLOBAL.walls;
    }

    static set shields(shields: TShield[]) {
        FORT_GLOBAL.shields = shields;
    }

    static set guards(guards: TGuard[]) {
        FORT_GLOBAL.guards = guards;
    }


    /**
     * port at which app will listen, default - 4000
     *
     * @static
     * @memberof Fort
     */
    static set port(value: number) {
        FORT_GLOBAL.port = value;
    }

    static get port() {
        return FORT_GLOBAL.port;
    }

    /**
     * typeof ErrorHandler
     *
     * @static
     * @memberof Fort
     */
    static set errorHandler(value: TErrorHandler) {
        FORT_GLOBAL.errorHandler = value;
    }

    static set routes(value: IControllerRoute[]) {
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
            class GenericController extends Controller {

            }
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
        FORT_GLOBAL.viewEngine = new (value as any)();
    }

    /**
     * sessionStore class, default - MemorySessionStore
     *
     * @static
     * @memberof Fort
     */
    static set sessionStore(value: TSessionStore) {
        FORT_GLOBAL.sessionStore = value;
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
    static set xmlParser(xmlParser: TXmlParser) {
        FORT_GLOBAL.xmlParser = xmlParser;
    }

    /**
     * Whether to parse cookie or not, default - true
     * If false, then session wont work.
     *
     * @static
     * @memberof Fort
     */
    static set shouldParseCookie(value: boolean) {
        FORT_GLOBAL.shouldParseCookie = value;
    }

    /**
     * Whether to parse the http body data in post request, default - true
     *
     * @static
     * @memberof Fort
     */
    static set shouldParseBody(value: boolean) {
        FORT_GLOBAL.shouldParseBody = value;
    }

    /**
     * session timeout in minute - default is 60 minute
     *
     * @static
     * @memberof Fort
     */
    static set sessionTimeOut(value: number) {
        FORT_GLOBAL.sessionTimeOut = value;
    }

    /**
     * name of application - default is fort. Visible in header and cookie.
     * Change name if you dont want any one to know the framework name.
     *
     * @static
     * @memberof Fort
     */
    static set appName(value: string) {
        FORT_GLOBAL.appName = value;
    }

    /**
     * Views folder location. By default it is - views.
     *
     * @static
     * @memberof Fort
     */
    static set viewPath(value: string) {
        FORT_GLOBAL.viewPath = value;
    }

    static set componentOption(value: typeof ComponentOption) {
        FORT_GLOBAL.componentOption = new value();
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
    static set folders(value: IFolderMap[]) {
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
     * @static
     * @memberof Fort
     */
    static set eTag(value: IEtagOption) {
        FORT_GLOBAL.eTag = value;
    }

    static instance = new Fort();

    // eslint-disable-next-line
    private constructor() {

    }

    private httpServer: http.Server;

    static create(): Promise<void> {
        FORT_GLOBAL.setDefault();

        if (this.instance.httpServer != null) {
            return;
        }
        return promise((res, rej) => {
            this.instance.httpServer = http.createServer(Fort.onNewRequest).once("error", (err) => {
                if ((err as any).code === 'EADDRINUSE') {
                    const error = new LogHelper(ERROR_TYPE.PortInUse, FORT_GLOBAL.port).get();
                    rej(error);
                }
                else {
                    rej(err);
                }
            }).once('listening', () => {
                // set default route
                // RouteHandler.defaultRouteControllerName = RouteHandler.getDefaultRoute();
                res();
            }).listen(FORT_GLOBAL.port);
        });
    }

    static onNewRequest(request, response) {
        new RequestHandler().handle(request, response);
    }

    static destroy(): Promise<void> {
        return promise((res) => {
            this.instance.httpServer.close(res);
        });
    }

    static set validator(validator: IDtoValidator) {
        FORT_GLOBAL.validator = validator;
    }

}
