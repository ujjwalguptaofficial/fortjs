import { WorkerInfo } from "./worker_info";
import { GenericShield, GenericController } from "../generics";
export declare type RouteInfo = {
    controller: typeof GenericController;
    controllerName: string;
    path: string;
    workers: WorkerInfo[];
    shields: Array<typeof GenericShield>;
};
