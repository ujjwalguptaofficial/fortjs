import { SessionProvider } from "../abstracts/session_provider";
import { Wall } from "../abstracts/wall";
import { ViewEngine } from "../abstracts/view_engine";
import { ErrorHandler } from "../model";
export interface IAppOption {
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
    walls?: typeof Wall[];
    errorHandler?: typeof ErrorHandler;
    /**
     * path to be used when url is root.
     *
     * @type {string}
     * @memberof IAppOption
     */
    defaultPath?: string;
}
