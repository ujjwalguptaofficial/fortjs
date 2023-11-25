import { GenericShield } from "../generics";
import { WorkerInfo } from "../models";
import { TController } from "../types";

export interface IRouteInfo {
    controller: TController;
    controllerName: string;
    path: string;
    // workerName => WorkerInfo
    workers: Map<string, WorkerInfo>;
    shields: Array<typeof GenericShield>;
    values: any[];
}