/// <reference types="node" />
import { ParentRoute, EtagOption, FolderMap } from "../types";
import { Wall, ViewEngine, SessionProvider, XmlParser, ResultMapper } from "../abstracts";
import { ErrorHandler } from ".";
import * as http from "http";
import { Logger } from "./logger";
import { ComponentOption } from "../abstracts/component_option";
export declare class Fort {
    static set logger(value: Logger);
    static get logger(): Logger;
    static set walls(walls: Array<typeof Wall>);
    /**
     * port at which app will listen, default - 4000
     *
     * @static
     * @memberof Fort
     */
    static set port(value: number);
    static get port(): number;
    /**
     * typeof ErrorHandler
     *
     * @static
     * @memberof Fort
     */
    static set errorHandler(value: typeof ErrorHandler);
    static set routes(value: ParentRoute[]);
    /**
     * view engine use to render the view
     *
     * @static
     * @memberof Fort
     */
    static set viewEngine(value: typeof ViewEngine);
    /**
     * sessionProvider class, default - MemorySessionProvider
     *
     * @static
     * @memberof Fort
     */
    static set sessionProvider(value: typeof SessionProvider);
    static set resultMapper(value: typeof ResultMapper);
    /**
     * XmlParser class - used to parse the xml
     *
     * @static
     * @memberof Fort
     */
    static set xmlParser(xmlParser: typeof XmlParser);
    /**
     * Whether to parse cookie or not, default - true
     * If false, then session wont work.
     *
     * @static
     * @memberof Fort
     */
    static set shouldParseCookie(value: boolean);
    /**
     * Whether to parse the post data, default - true
     *
     * @static
     * @memberof Fort
     */
    static set shouldParsePost(value: boolean);
    /**
     * session timeout in minute - default is 60 minute
     *
     * @static
     * @memberof Fort
     */
    static set sessionTimeOut(value: number);
    /**
     * name of application - default is fort. Visible in header and cookie.
     * Change name if you dont want any one to know the framework name.
     *
     * @static
     * @memberof Fort
     */
    static set appName(value: string);
    /**
     * Views folder location. By default it is - views.
     *
     * @static
     * @memberof Fort
     */
    static set viewPath(value: string);
    static set componentOption(value: typeof ComponentOption);
    static get httpServer(): http.Server;
    static set httpServer(value: http.Server);
    /**
     * folders which should be visible to requests. By default nothing is allowed.
     *
     * @static
     * @memberof Fort
     */
    static set folders(value: FolderMap[]);
    /**
     * eTag Settings
     *
     * @static
     * @memberof Fort
     */
    static set eTag(value: EtagOption);
    static instance: Fort;
    private constructor();
    private httpServer;
    static create(): Promise<void>;
    static onNewRequest(request: any, response: any): void;
    static destroy(): Promise<void>;
}
