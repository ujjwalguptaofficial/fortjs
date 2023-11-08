import { IWorkerInfo } from ".";
import { HTTP_METHOD } from "../enums";
import { GenericController, GenericShield } from "../generics";

export type RouteMatch = {
  controller: typeof GenericController;
  workerInfo: IWorkerInfo;
  params: any;
  shields: Array<typeof GenericShield>;
  allowedHttpMethod: HTTP_METHOD[];
  controllerName: string;
};


