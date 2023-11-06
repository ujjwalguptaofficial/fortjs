import { ErrorHandler, Logger } from "../models";
import { ViewEngine, XmlParser, ComponentOption } from "../abstracts";
import { EtagOption, FolderMap } from "../types";
import { GenericSessionProvider, GenericWall, GenericXmlParser } from "../generics";
import { MustacheViewEngine, MemorySessionProvider } from "../extra";
import { APP_NAME, CURRENT_PATH } from "./index";
import * as path from "path";
import { ETAG_TYPE } from "../enums";

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === "production";

class FortGlobal {
    port = 4000;
    viewPath;
    shouldParseCookie = true;
    shouldParsePost = true;
    sessionProvider: typeof GenericSessionProvider;
    sessionTimeOut = 60;
    viewEngine: ViewEngine;
    walls: Array<typeof GenericWall> = [];
    errorHandler: typeof ErrorHandler;
    connectonKeepAliveTimeout?: number;

    appName: string;

    eTag: EtagOption;

    folders: FolderMap[] = [];
    appSessionIdentifier: string;
    xmlParser: typeof XmlParser;

    logger: Logger;

    get isDevelopment() {
        return isDevelopment;
    }

    get isProduction() {
        return isProduction;
    }

    componentOption = new ComponentOption();

    setDefault() {

        if (this.viewPath == null) {
            this.viewPath = path.join(CURRENT_PATH, "views");
        }

        if (this.logger == null) {
            this.logger = this.logger || new Logger();
        }

        if (this.sessionProvider == null) {
            this.sessionProvider = MemorySessionProvider as any;
        }

        if (this.xmlParser == null) {
            this.xmlParser = GenericXmlParser;
        }

        if (this.viewEngine == null) {
            this.viewEngine = new MustacheViewEngine();
        }

        if (this.appName == null) {
            this.appName = APP_NAME;
        }

        if (this.eTag == null) {
            this.eTag = {
                type: ETAG_TYPE.Weak
            } as EtagOption;
        }

        if (this.errorHandler == null) {
            this.errorHandler = ErrorHandler;
        }

        this.appSessionIdentifier = `${this.appName}_session_id`;
    }

}

export const FORT_GLOBAL = new FortGlobal();