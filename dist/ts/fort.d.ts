/// <reference types="node" />
import { Route } from "./types/route";
import { Wall, ViewEngine, SessionProvider } from "./abstracts";
import { AppOption } from "./types";
import { ErrorHandler } from "./model/error_handler";
import * as http from "http";
export declare class Fort {
    routes: Route[];
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
    private isArray_;
    private saveAppOption_;
    create(option: AppOption): Promise<any>;
    destroy(): Promise<any>;
    mapPath(oldPath: string, newPath: string): void;
    mapVirtualPath(actualPath: string, mappedPath: string): void;
}
