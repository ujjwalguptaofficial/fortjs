import * as http from "http";
import { IRouteController } from "./interfaces";
import { ViewEngine } from "./model/view_engine";
export class Global {
    static request: http.IncomingMessage;
    static response: http.ServerResponse;
    static port: number;
    static viewPath: string;
    static ControllerCollection: IRouteController[] = [];
    static viewEngine: ViewEngine;
    
}