export * from "./http_cookie";
export * from "./exception";
export * from './controller';
export * from './route_info';

import * as http from "http";
import { SessionProvider } from "../abstracts";
import { CookieManager, FileManager } from "../models";

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
}