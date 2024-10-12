import * as http from "http";
import { App, CookieManager, FileManager, QueueManager } from "../models";
import { SessionManager } from "../utils";
import { TComponentQuery } from "../types";
import { CacheManager } from "../utils/cache_manager";
import { IWorkerInfo } from "./worker_info";

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
    queue: QueueManager;
    controllerName?: string;
    global: App;
    cache: CacheManager;
    workerInfo?: IWorkerInfo;
}
