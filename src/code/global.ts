import * as http from "http";
import { IRouteInfo } from "./interfaces";
import { ViewEngine } from "./model/view_engine";

const routerCollection: IRouteInfo[] = [];
export class Global {
    static request: http.IncomingMessage;
    static response: http.ServerResponse;
    static port: number;
    static viewPath: string;
    static get routerCollection() {
        return routerCollection;
    }

    static addToRouterCollection(value: IRouteInfo) {
        const index = routerCollection.findIndex(x => x.controllerName === value.controllerName);
        if (index < 0) {
            routerCollection.push(value);
        }
        else {
            routerCollection[0].controller = value.controller;
            routerCollection[0].path = value.path;
        }
    }

    static viewEngine: ViewEngine;

}