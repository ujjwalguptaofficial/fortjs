import { IRouteActionInfo } from "./route_action_info";
import { GenericShield } from "../model/generic_shield";
import { GenericController } from "../model/generic_controller";
import { HTTP_METHOD } from "../enums";
export interface IRouteMatch {
    controller: typeof GenericController;
    actionInfo: IRouteActionInfo;
    params: any;
    shields: typeof GenericShield[];
    allows: HTTP_METHOD[];
}
