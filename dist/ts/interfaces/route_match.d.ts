import { IRouteActionInfo } from "./route_action_info";
import { GenericShield } from "../model/generic_shield";
import { GenericController } from "../model/generic_controller";
export interface IRouteMatch {
    controller: typeof GenericController;
    actionInfo: IRouteActionInfo;
    params: any;
    shields: typeof GenericShield[];
    isRequestTypeFile: boolean;
}
