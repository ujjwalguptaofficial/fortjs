import { Controller } from "../abstracts/controller";
import { IRouteActionInfo } from "./route_action_info";
import { Shield } from "../abstracts";
import { GenericShield } from "../model/generic_shield";
import { GenericController } from "../model/generic_controller";
import { HTTP_METHOD } from "../enums";

export interface IRouteMatch {
  controller: typeof GenericController;
  actionInfo: IRouteActionInfo;
  params: any;
  shields: Array<typeof GenericShield>;

  allows: HTTP_METHOD[];
}


