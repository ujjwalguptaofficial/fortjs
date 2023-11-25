import { IWorkerInfo, TController } from ".";
import { HTTP_METHOD } from "../enums";
import { GenericShield } from "../generics";

export type RouteMatch = {
  controller: TController;
  workerInfo: IWorkerInfo;
  params: any;
  shields: Array<typeof GenericShield>;
  allowedHttpMethod: HTTP_METHOD[];
  controllerName: string;
};


