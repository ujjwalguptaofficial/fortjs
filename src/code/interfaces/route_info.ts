import { IRouteActionInfo } from "../interfaces";
import { Guard } from "../abstracts";

export interface IRouteInfo {
    controller: object;
    controllerName: string;
    path: string;
    actions: IRouteActionInfo[];
    guards: Guard[];
}