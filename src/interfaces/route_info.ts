import { GenericController, GenericShield } from "../generics";
import { WorkerInfo } from "../models";

export interface IRouteInfo {
    controller: typeof GenericController;
    controllerName: string;
    path: string;
    workers: {
        [workerName: string]: WorkerInfo
    };
    shields: Array<typeof GenericShield>;
    values: any[];
}