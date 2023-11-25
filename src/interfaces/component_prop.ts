import * as http from "http";
import { CookieManager, FileManager } from "../models";
import { FortGlobal } from "../constants";
import { SessionProvider } from "../utils";

export interface IComponentProp {
    request: http.IncomingMessage;
    response: http.ServerResponse;
    query: { [key: string]: any };
    body?: { [key: string]: any };
    session: SessionProvider;
    cookie: CookieManager;
    param?: { [key: string]: string };
    data: { [key: string]: any };
    file?: FileManager;
    workerName?: string;
    controllerName?: string;
    global: FortGlobal;
}