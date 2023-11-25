import { WorkerInfo } from "../models";
import { TController, TShield } from "../types";

export interface IRouteInfo {
    controller: TController;
    controllerName: string;
    path: string;
    // workerName => WorkerInfo
    workers: Map<string, WorkerInfo>;
    shields: Array<TShield>;
    values: any[];
}