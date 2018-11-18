import { SessionProvider } from "../abstracts/session_provider";
import { ViewEngine } from "../abstracts/view_engine";
import { ErrorHandler } from "../model";
export declare type AppOption = {
    port?: number;
    viewEngine?: typeof ViewEngine;
    shouldParseCookie?: boolean;
    shouldParsePost?: boolean;
    sessionProvider?: typeof SessionProvider;
    /**
     * session timeout in minute - default is 60 minute
     *
     * @type {number}
     * @memberof IAppOption
     */
    sessionTimeOut?: number;
    foldersAllowed?: string[];
    errorHandler?: typeof ErrorHandler;
    /**
     * path to be used when url is root.
     *
     * @type {string}
     * @memberof IAppOption
     */
    defaultPath?: string;
    /**
     * Timeout in milliseconds. Default: 5000 (5 seconds).
     * The number of milliseconds of inactivity a server needs to wait for additional incoming data,
     * after it has finished writing the last response, before a socket will be destroyed.
     * If the server receives new data before the keep-alive timeout has fired,
     * it will reset the regular inactivity timeout
     *
     * @type {number}
     */
    connectonKeepAliveTimeout?: number;
    /**
     * name of application - default is fort
     *
     * @type {string}
     */
    appName?: string;
};
