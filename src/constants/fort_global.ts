import { ErrorHandler, Logger } from "../models";
import { ViewEngine, ComponentOption } from "../abstracts";
import { TErrorHandler, TGuard, TSessionStore, TShield, TTaskScheduler, TWall, TXmlParser } from "../types";
import { MustacheViewEngine, DtoValidator } from "../extra";
import { APP_NAME, CURRENT_PATH } from "./index";
import { ETAG_TYPE } from "../enums";
import { IScheduleTaskInput, IDtoValidator, IEtagOption, IFolderMap, ICacheStore } from "../interfaces";
import { CookieEvaluatorWall, MemorySessionStore, BlankXmlParser, PostDataEvaluatorGuard, MemoryCacheStore, CacheGuard } from "../providers";
import { RouteHandler } from "../handlers";
import { DefaultCronJobScheduler } from "../providers/cron_job_scheduler";
import { CacheWall } from "../providers/cache_wall";
import { CacheManager } from "../utils";

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === "production";

export class FortGlobal {
    port = 4000;
    viewPath;
    shouldParseCookie = true;
    shouldEnableCache = false;
    shouldParseBody = true;
    sessionStore: TSessionStore;
    cacheStore: ICacheStore;
    sessionTimeOut = 60;
    viewEngine: ViewEngine;
    walls: TWall[] = [];
    errorHandler: TErrorHandler;
    cronJobScheduler: TTaskScheduler = DefaultCronJobScheduler;
    keepAliveTimeout = 30000;
    private shields: TShield[] = [];
    private guards: TGuard[] = [];

    addGuards(guards: TGuard[]) {
        this.guards = guards;
    }

    addShields(shields: TShield[]) {
        this.shields = shields;
    }

    appName: string;

    eTag: IEtagOption;

    folders: IFolderMap[] = [];
    appSessionIdentifier: string;
    xmlParser: TXmlParser;

    logger: Logger;

    validator: IDtoValidator;
    crons: IScheduleTaskInput[] = [];

    get isDevelopment() {
        return isDevelopment;
    }

    get isProduction() {
        return isProduction;
    }

    componentOption = new ComponentOption();
    cacheManager: CacheManager;

    setDefault() {

        this.viewPath = this.viewPath || CURRENT_PATH;
        this.logger = this.logger || new Logger();

        this.sessionStore = this.sessionStore || MemorySessionStore;
        this.cacheStore = this.cacheStore || new MemoryCacheStore();
        this.xmlParser = this.xmlParser || BlankXmlParser;
        this.viewEngine = this.viewEngine || new MustacheViewEngine();
        this.appName = this.appName || APP_NAME;

        if (this.eTag == null) {
            this.eTag = {
                type: ETAG_TYPE.Weak
            } as IEtagOption;
        }
        this.errorHandler = this.errorHandler || ErrorHandler;
        this.validator = this.validator || new DtoValidator();
        this.appSessionIdentifier = `${this.appName}_session_id`;

        if (this.shouldParseCookie === true) {
            this.walls.unshift(
                CookieEvaluatorWall
            );
        }

        if (this.shouldEnableCache === true) {
            this.walls.push(
                CacheWall
            );
            this.guards.push(CacheGuard);
            this.cacheManager = new CacheManager(
                this.cacheStore
            );
        }

        if (this.shouldParseBody === true) {
            this.guards.unshift(
                PostDataEvaluatorGuard as any
            );
        }

        const shouldEnableCache = this.shouldEnableCache;
        // add global shields
        RouteHandler.routerCollection.forEach((route) => {
            route.shields = this.shields.concat(route.shields);
            route.workers.forEach((worker) => {
                worker.guards = this.guards.concat(worker.guards);
                if (shouldEnableCache === true) {
                    worker.guards.push(CacheGuard)
                }
            })
        });
    }

}

export const FORT_GLOBAL = new FortGlobal();