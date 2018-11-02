import { ViewEngine } from "./model/view_engine";

export interface IOption {
    port?: number;
    viewEngine?: ViewEngine;
}

export interface IRouteDetail {
    controllerName: string;
    actionName: string;
}

export interface IRouteController {
    controller: object;
    path: string;
}

export interface IError {
    type: string;
    message: string;
}