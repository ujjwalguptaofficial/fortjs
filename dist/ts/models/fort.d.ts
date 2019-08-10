/// <reference types="node" />
import { ParentRoute, AppOption } from "../types";
import { Wall, ViewEngine, SessionProvider, XmlParser } from "../abstracts";
import { ErrorHandler } from ".";
import * as http from "http";
export declare class Fort {
    routes: ParentRoute[];
    walls: Array<typeof Wall>;
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
    private saveAppOption_;
    create(option?: AppOption): Promise<void>;
    destroy(): Promise<void>;
}
