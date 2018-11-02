import { ViewEngine } from "./model/view_engine";
import { HTTP_METHOD } from "./enums";

export interface IOption {
    port?: number;
    viewEngine?: ViewEngine;
}

export interface IRouteUrlDetail {
    controllerName: string;
    actionName: string;
}

export interface IRouteInfo {
    controller: object;
    controllerName: string;
    path: string;
    actions: IRouteActionInfo[]
}

export interface IRouteActionInfo {
    action: string;
    methodsAllowed: HTTP_METHOD[]
}


export interface IError {
    type: string;
    message: string;
}