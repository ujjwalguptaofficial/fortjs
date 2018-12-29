import { RouteActionInfo } from "./route_action_info";
import { GenericShield } from "../models/generic_shield";
import { GenericController } from "../models/generic_controller";
import { HTTP_METHOD } from "../enums";
export declare type RouteMatch = {
    controller: typeof GenericController;
    actionInfo: RouteActionInfo;
    params: any;
    shields: Array<typeof GenericShield>;
    allows: HTTP_METHOD[];
};
