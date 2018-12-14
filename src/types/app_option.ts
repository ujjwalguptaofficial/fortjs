import { SessionProvider } from "../abstracts/session_provider";
import { ViewEngine } from "../abstracts/view_engine";
import { ErrorHandler } from "../model";
import { EtagOption } from "./etag_option";

export type AppOption = {
    /**
     * port at which app will listen, default - 4000
     *
     * @type {number}
     */
    port?: number;

    /**
     * view engine use to render the view
     *
     * @type {typeof ViewEngine}
     */
    viewEngine?: typeof ViewEngine;

    /**
     * Whether to parse cookie or not, default - true
     * If false, then session wont work.
     *
     * @type {boolean}
     */
    shouldParseCookie?: boolean;

    /**
     * Whether to parse the post data, default - true
     *
     * @type {boolean}
     */
    shouldParsePost?: boolean;

    /**
     * sessionProvider class, default - MemorySessionProvider
     *
     * @type {typeof SessionProvider}
     */
    sessionProvider?: typeof SessionProvider;

    /**
     * session timeout in minute - default is 60 minute
     *
     * @type {number}
     * @memberof IAppOption
     */
    sessionTimeOut?: number;

    /**
     * folders which should be visible to requests. By default nothing is allowed.
     *
     * @type {string[]}
     */
    foldersAllowed?: string[];

    /**
     * Custom error handler class
     *
     * @type {typeof ErrorHandler}
     */
    errorHandler?: typeof ErrorHandler;

    /**
     * path to be used when url is root.
     *
     * @type {string}
     * @memberof IAppOption
     */
    defaultPath?: string;

    /**
     * name of application - default is fort. Visible in header and cookie.
     * Change the name if you dont want to let users know the framework name.
     *
     * @type {string}
     */
    appName?: string;

    /**
     * eTag Settings
     *
     * @type {EtagOption}
     */
    eTag?: EtagOption
};
