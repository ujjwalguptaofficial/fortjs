import { ErrorHandler, Logger } from "../models";
import { ViewEngine, ComponentOption } from "../abstracts";
import { EtagOption, FolderMap, TErrorHandler, TGuard, TSessionStore, TShield, TWall, TXmlParser } from "../types";
import { MustacheViewEngine, DtoValidator } from "../extra";
import { APP_NAME, CURRENT_PATH } from "./index";
import * as path from "path";
import { ETAG_TYPE } from "../enums";
import { IDtoValidator } from "../interfaces";
import { CookieEvaluatorWall, MemorySessionStore, BlankXmlParser, PostDataEvaluatorGuard } from "../providers";

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === "production";

export class FortGlobal {
    port = 4000;
    viewPath;
    shouldParseCookie = true;
    shouldParseBody = true;
    sessionStore: TSessionStore;
    sessionTimeOut = 60;
    viewEngine: ViewEngine;
    walls: TWall[] = [];
    errorHandler: TErrorHandler;
    connectonKeepAliveTimeout?: number;
    shields: TShield[] = [];
    guards: TGuard[] = [];

    appName: string;

    eTag: EtagOption;

    folders: FolderMap[] = [];
    appSessionIdentifier: string;
    xmlParser: TXmlParser;

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

        this.viewPath = this.viewPath || path.join(CURRENT_PATH, "views");
        this.logger = this.logger || new Logger();

        this.sessionStore = this.sessionStore || MemorySessionStore;
        this.xmlParser = this.xmlParser || BlankXmlParser;
        this.viewEngine = this.viewEngine || new MustacheViewEngine();
        this.appName = this.appName || APP_NAME;

        if (this.eTag == null) {
            this.eTag = {
                type: ETAG_TYPE.Weak
            } as EtagOption;
        }
        this.errorHandler = this.errorHandler || ErrorHandler;
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