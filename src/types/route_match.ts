import { WorkerInfo } from ".";
import { HTTP_METHOD } from "../enums";
import { GenericController, GenericShield } from "../generics";

export type RouteMatch = {
  controller: typeof GenericController;
  actionInfo: WorkerInfo;
  params: any;
  shields: Array<typeof GenericShield>;
  allowedHttpMethod: HTTP_METHOD[];
};


