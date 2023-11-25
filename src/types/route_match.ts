import { IWorkerInfo, TController, TShield } from ".";
import { HTTP_METHOD } from "../enums";

export type RouteMatch = {
  controller: TController;
  workerInfo: IWorkerInfo;
  params: any;
  shields: Array<TShield>;
  allowedHttpMethod: HTTP_METHOD[];
  controllerName: string;
};


