
import { IRouteActionInfo } from "./route_action_info";
import { GenericShield } from "../model/generic_shield";
import { GenericController } from "../model/generic_controller";

export interface IRouteInfo {
    controller: typeof GenericController;
    controllerName: string;
    alias: string;
    actions: IRouteActionInfo[];
    shields: typeof GenericShield[];
}