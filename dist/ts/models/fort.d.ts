/// <reference types="node" />
import { ParentRoute, EtagOption, FolderMap } from "../types";
import { Wall, ViewEngine, SessionProvider, XmlParser, ResultMapper } from "../abstracts";
import { ErrorHandler } from ".";
import * as http from "http";
import { Logger } from "./logger";
import { ComponentOption } from "../abstracts/component_option";
export declare class Fort {
    static logger: Logger;
    static walls: Array<typeof Wall>;
    /**
     * port at which app will listen, default - 4000
     *
     * @static
     * @memberof Fort
     */
    static port: number;
    /**
     * typeof ErrorHandler
     *
     * @static
     * @memberof Fort
     */
    static errorHandler: typeof ErrorHandler;
    static routes: ParentRoute[];
    /**
     * view engine use to render the view
     *
     * @static
     * @memberof Fort
     */
    static viewEngine: typeof ViewEngine;
    /**
     * sessionProvider class, default - MemorySessionProvider
     *
     * @static
     * @memberof Fort
     */
    static sessionProvider: typeof SessionProvider;
    static resultMapper: typeof ResultMapper;
    /**
     * XmlParser class - used to parse the xml
     *
     * @static
     * @memberof Fort
     */
    static xmlParser: typeof XmlParser;
    /**
     * Whether to parse cookie or not, default - true
     * If false, then session wont work.
     *
     * @static
     * @memberof Fort
     */
    static shouldParseCookie: boolean;
    /**
     * Whether to parse the post data, default - true
     *
     * @static
     * @memberof Fort
     */
    static shouldParsePost: boolean;
    /**
     * session timeout in minute - default is 60 minute
     *
     * @static
     * @memberof Fort
     */
    static sessionTimeOut: number;
    /**
     * name of application - default is fort. Visible in header and cookie.
     * Change name if you dont want any one to know the framework name.
     *
     * @static
     * @memberof Fort
     */
    static appName: string;
    /**
     * Views folder location. By default it is - views.
     *
     * @static
     * @memberof Fort
     */
    static viewPath: string;
    static componentOption: typeof ComponentOption;
    static httpServer: http.Server;
    /**
     * folders which should be visible to requests. By default nothing is allowed.
     *
     * @static
     * @memberof Fort
     */
    static folders: FolderMap[];
    /**
     * eTag Settings
     *
     * @static
     * @memberof Fort
     */
    static eTag: EtagOption;
    static instance: Fort;
    private constructor();
    private httpServer;
    static create(): Promise<void>;
    static onNewRequest(request: any, response: any): void;
    static destroy(): Promise<void>;
}
