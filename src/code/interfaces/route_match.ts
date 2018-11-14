import { Controller } from "../abstracts/controller";
import { IRouteActionInfo } from "./route_action_info";
import { Shield } from "../abstracts";
import { GenericShield } from "../model/generic_shield";
import { GenericController } from "../model/generic_controller";

export interface IRouteMatch {
    controller: typeof GenericController;
    actionInfo: IRouteActionInfo;
    params: any;
    shields: typeof GenericShield[]
  //  isRequestTypeFile: boolean
}


