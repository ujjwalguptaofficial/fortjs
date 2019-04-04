import { FolderMap, EtagOption } from ".";
export declare type AppOption = {
    /**
     * port at which app will listen, default - 4000
     *
     * @type {number}
     */
    port?: number;
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
     * session timeout in minute - default is 60 minute
     *
     * @type {number}
     * @memberof IAppOption
     */
    sessionTimeOut?: number;
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
    eTag?: EtagOption;
    /**
     * folders which should be visible to requests. By default nothing is allowed.
     *
     * @type {FolderMap[]}
     */
    folders?: FolderMap[];
    /**
     * Views folder location. By default it is - views.
     * If you are changing the value, you need to change the value of copyWebpackPlugin in webpack config.
     *
     * @type {string}
     */
    viewPath?: string;
};
