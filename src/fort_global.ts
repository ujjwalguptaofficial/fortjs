import { ErrorHandler, Logger } from "./models";
import { ViewEngine, XmlParser } from "./abstracts";
import { EtagOption, FolderMap } from "./types";
import { GenericSessionProvider, GenericWall, GenericXmlParser } from "./generics";
import { ComponentOption } from "./abstracts/component_option";
import { MustacheViewEngine, MemorySessionProvider } from "./extra";
import { __AppName, __CurrentPath } from "./constant";
import * as path from "path";
import { ETag_Type } from "./enums";

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === "production";
export class FortGlobal {
    static port: number = 4000;
    static viewPath;
    static shouldParseCookie: boolean = true;
    static shouldParsePost: boolean = true;
    static sessionProvider: typeof GenericSessionProvider;
    static sessionTimeOut: number = 60;
    static viewEngine: ViewEngine;
    static walls: Array<typeof GenericWall> = [];
    static errorHandler: typeof ErrorHandler;
    static connectonKeepAliveTimeout?: number;

    static appName: string;

    static eTag: EtagOption;

    static folders: FolderMap[] = [];
    static appSessionIdentifier: string;
    static xmlParser: typeof XmlParser;

    static logger: Logger;

    static get isDevelopment() {
        return isDevelopment;
    }

    static get isProduction() {
        return isProduction;
    }

    static componentOption = new ComponentOption();

    static setDefault() {

        if (FortGlobal.viewPath == null) {
            FortGlobal.viewPath = path.join(__CurrentPath, "views");
        }

        if (FortGlobal.logger == null) {
            FortGlobal.logger = FortGlobal.logger || new Logger();
        }

        if (FortGlobal.sessionProvider == null) {
            FortGlobal.sessionProvider = MemorySessionProvider as any;
        }

        if (FortGlobal.xmlParser == null) {
            FortGlobal.xmlParser = GenericXmlParser;
        }

        if (FortGlobal.viewEngine == null) {
            FortGlobal.viewEngine = new MustacheViewEngine();
        }

        if (FortGlobal.appName == null) {
            FortGlobal.appName = __AppName;
        }

        if (FortGlobal.eTag == null) {
            FortGlobal.eTag = {
                type: ETag_Type.Weak
            } as EtagOption;
        }

        if (FortGlobal.errorHandler == null) {
            FortGlobal.errorHandler = ErrorHandler;
        }

        FortGlobal.appSessionIdentifier = `${FortGlobal.appName}_session_id`;
    }

}