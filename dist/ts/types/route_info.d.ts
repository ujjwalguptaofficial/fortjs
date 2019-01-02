import { WorkerInfo } from "./worker_info";
import { GenericShield } from "../models/generic_shield";
import { GenericController } from "../models/generic_controller";
export declare type RouteInfo = {
    controller: typeof GenericController;
    controllerName: string;
    path: string;
    workers: WorkerInfo[];
    shields: Array<typeof GenericShield>;
};
