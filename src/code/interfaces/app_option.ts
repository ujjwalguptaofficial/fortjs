import { ViewEngine } from "../model/view_engine";
import { SessionProvider } from "../abstracts/session_provider";

export interface IAppOption {
    port?: number;
    viewEngine?: ViewEngine;
    shouldParseCookie?: boolean;
    shouldParsePost?: boolean;
    sessionProvider?: SessionProvider;

    /**
     * session timeout in minute - default is 60 minute
     *
     * @type {number}
     * @memberof IAppOption
     */
    sessionTimeOut?: number;
}
