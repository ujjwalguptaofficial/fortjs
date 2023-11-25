import { GenericShield } from "../generics";
import { IRouteInfo } from "../interfaces";
import { TController } from "../types";
import { WorkerInfo } from "./worker_info";

export class RouteInfo implements IRouteInfo {
    controller: TController;
    controllerName: string;
    // workerName => WorkerInfo
    workers: Map<string, WorkerInfo>;

    get workersAsArray() {
        return Array.from(this.workers.keys()).map(workerName => {
            return this.workers.get(workerName);
        });
    }

    shields: Array<typeof GenericShield>;
    values: any[];

    pathSplitted: string[];

    constructor(value: IRouteInfo) {
        this.controllerName = value.controllerName;
        this.controller = value.controller;
        this.path = value.path;
        this.shields = value.shields;
        this.values = value.values;
        this.workers = value.workers as any;
    }

    set path(value) {
        if (value) {
            this.pathSplitted = value.split("/");
        }
    }
}