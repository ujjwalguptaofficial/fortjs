import { ParentRoute, WorkerInfo } from "../types";
import { RouteHandler } from "../handlers";

export const addRoute = (controllerRoute: ParentRoute, workerInfos: WorkerInfo[]) => {
    const className = controllerRoute.controller.name;
    RouteHandler.addControllerRoute(controllerRoute);
    workerInfos.forEach(route => {
        RouteHandler.addWorker(route, className);
    });
};