import { GenericShield, GenericController } from "../generics";
import { WorkerInfo } from "../types";
import { IRouteInfo } from "../interfaces";

export class RouteInfo implements IRouteInfo {
    controller: typeof GenericController;
    controllerName: string;
    path: string;
    workers: {
        [workerName: string]: WorkerInfo
    };

    get workersAsArray() {
        return Object.keys(this.workers).map(workerName => {
            return this.workers[workerName];
            return this.workers[workerName];
        });
    }

    shields: Array<typeof GenericShield>;
    values: any[];

    init(value: IRouteInfo) {
        this.controllerName = value.controllerName;
        this.controller = value.controller;
        this.path = value.path;
        this.shields = value.shields;
        this.values = value.values;
        this.workers = value.workers;
    }
}