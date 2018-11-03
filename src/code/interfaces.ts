import { HTTP_METHOD } from "./enums";

export interface IRouteUrlDetail {
    controllerName: string;
    actionName: string;
}

export interface IRouteActionInfo {
    action: string;
    methodsAllowed: HTTP_METHOD[]
}


