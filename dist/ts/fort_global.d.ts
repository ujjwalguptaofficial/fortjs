import { ErrorHandler, Logger } from "./models";
import { ViewEngine, XmlParser } from "./abstracts";
import { EtagOption, FolderMap } from "./types";
import { GenericSessionProvider, GenericWall } from "./generics";
import { ComponentOption } from "./abstracts/component_option";
export declare class FortGlobal {
    static port: number;
    static viewPath: any;
    static shouldParseCookie: boolean;
    static shouldParsePost: boolean;
    static sessionProvider: typeof GenericSessionProvider;
    static sessionTimeOut: number;
    static viewEngine: ViewEngine;
    static walls: Array<typeof GenericWall>;
    static errorHandler: typeof ErrorHandler;
    static connectonKeepAliveTimeout?: number;
    static appName: string;
    static eTag: EtagOption;
    static folders: FolderMap[];
    static appSessionIdentifier: string;
    static xmlParser: typeof XmlParser;
    static logger: Logger;
    static readonly isDevelopment: boolean;
    static readonly isProduction: boolean;
    static componentOption: ComponentOption;
    static setDefault(): void;
}
