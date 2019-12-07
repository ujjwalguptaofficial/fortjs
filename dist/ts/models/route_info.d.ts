import { GenericShield, GenericController } from "../generics";
import { WorkerInfo } from "../types";
import { IRouteInfo } from "../interfaces";
export declare class RouteInfo implements IRouteInfo {
    controller: typeof GenericController;
    controllerName: string;
    path: string;
    workers: {
        [workerName: string]: WorkerInfo;
    };
    readonly workersAsArray: WorkerInfo[];
    shields: Array<typeof GenericShield>;
    values: any[];
    init(value: IRouteInfo): void;
}
