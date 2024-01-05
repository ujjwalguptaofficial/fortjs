import * as http from "http";
import { CookieManager, FileManager } from "../models";
import { FortGlobal } from "../constants";
import { SessionManager } from "../utils";
import { TComponentQuery } from "../types";
import { CacheManager } from "../utils/cache_manager";

export interface IComponentProp {
    request: http.IncomingMessage;
    response: http.ServerResponse;
    query: TComponentQuery;
    body?: { [key: string]: any };
    session: SessionManager;
    cookie: CookieManager;
    param?: { [key: string]: string };
    data: { [key: string]: any };
    file?: FileManager;
    workerName?: string;
    controllerName?: string;
    global: FortGlobal;
    cache: CacheManager;
}