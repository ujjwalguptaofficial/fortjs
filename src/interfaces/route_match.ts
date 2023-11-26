import { TController, TShield } from "../types";
import { HTTP_METHOD } from "../enums";
import { IWorkerInfo } from "./worker_info";

export interface IRouteMatch {
  controller: TController;
  workerInfo: IWorkerInfo;
  params: any;
  shields: TShield[];
  allowedHttpMethod: HTTP_METHOD[];
  controllerName: string;
}


