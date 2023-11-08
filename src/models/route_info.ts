import { GenericShield, GenericController } from "../generics";
import { IRouteInfo } from "../interfaces";
import { WorkerInfo } from "./worker_info";

export class RouteInfo implements IRouteInfo {
    controller: typeof GenericController;
    controllerName: string;
    path_: string;
    workers: {
        [workerName: string]: WorkerInfo
    };

    get workersAsArray() {
        return Object.keys(this.workers).map(workerName => {
            return this.workers[workerName];
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
        this.path_ = value;
    }
}