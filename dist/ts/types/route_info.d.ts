import { RouteActionInfo } from "./route_action_info";
import { GenericShield } from "../models/generic_shield";
import { GenericController } from "../models/generic_controller";
export declare type RouteInfo = {
    controller: typeof GenericController;
    controllerName: string;
    path: string;
    actions: RouteActionInfo[];
    shields: Array<typeof GenericShield>;
};
