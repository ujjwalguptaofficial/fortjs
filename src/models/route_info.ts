import { IRouteInfo, IRouteInfoChildren } from "../interfaces";
import { TController, TShield } from "../types";
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

    shields: Array<TShield>;
    values: any[];
    partialRoutes: IRouteInfoChildren[];

    pathSplitted: string[];

    constructor(value: IRouteInfo) {
        this.controllerName = value.controllerName;
        this.controller = value.controller;
        this.path = value.path;
        this.shields = value.shields;
        this.values = value.values;
        this.workers = value.workers as any;
        this.partialRoutes = value.partialRoutes;
    }

    set path(value) {
        if (value) {
            this.pathSplitted = value.split("/");
        }
    }
}