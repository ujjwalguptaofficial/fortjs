import { GenericController, GenericShield } from "../generics";
import { WorkerInfo } from "../models";

export interface IRouteInfo {
    controller: typeof GenericController;
    controllerName: string;
    path: string;
    // workerName => WorkerInfo
    workers: Map<string, WorkerInfo>;
    shields: Array<typeof GenericShield>;
    values: any[];
}