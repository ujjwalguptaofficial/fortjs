import { HTTP_METHOD } from "./enums";

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


