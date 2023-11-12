import { ErrorHandler, Logger } from "../models";
import { ViewEngine, XmlParser, ComponentOption, Shield } from "../abstracts";
import { EtagOption, FolderMap } from "../types";
import { GenericGuard, GenericSessionProvider, GenericShield, GenericWall, GenericXmlParser } from "../generics";
import { MustacheViewEngine, MemorySessionProvider, DtoValidator } from "../extra";
import { APP_NAME, CURRENT_PATH } from "./index";
import * as path from "path";
import { ETAG_TYPE } from "../enums";
import { IDtoValidator } from "../interfaces";
import { CookieEvaluatorWall, PostDataEvaluatorGuard } from "../providers";

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === "production";

export class FortGlobal {
    port = 4000;
    viewPath;
    shouldParseCookie = true;
    shouldParseBody = true;
    sessionProvider: typeof GenericSessionProvider;
    sessionTimeOut = 60;
    viewEngine: ViewEngine;
    walls: Array<typeof GenericWall> = [];
    errorHandler: typeof ErrorHandler;
    connectonKeepAliveTimeout?: number;
    shields: typeof GenericShield[] = [];
    guards: typeof GenericGuard[] = [];

    appName: string;

    eTag: EtagOption;

    folders: FolderMap[] = [];
    appSessionIdentifier: string;
    xmlParser: typeof XmlParser;

    logger: Logger;

    validator: IDtoValidator;

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
        this.validator = this.validator || new DtoValidator();
        this.appSessionIdentifier = `${this.appName}_session_id`;

        this.walls.unshift(
            CookieEvaluatorWall as any
        );

        if (this.shouldParseBody === true) {
            this.guards.unshift(
                PostDataEvaluatorGuard as any
            );
        }

    }

}

export const FORT_GLOBAL = new FortGlobal();