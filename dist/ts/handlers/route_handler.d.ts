import { WorkerInfo, ParentRoute } from "../types";
import { GenericShield, GenericGuard } from "../generics";
import { RouteInfo } from "../models";
export declare class RouteHandler {
    static readonly routerCollection: {
        [controllerName: string]: RouteInfo;
    };
    static readonly routesAsArray: RouteInfo[];
    static findControllerFromPath(path: string): RouteInfo;
    static readonly defaultRoute: RouteInfo;
    static addToRouterCollection(value: ParentRoute): void;
    static addShields(shields: Array<typeof GenericShield>, className: string): void;
    static addWorker(newWorker: WorkerInfo, className: string): void;
    static addGuards(guards: Array<typeof GenericGuard>, className: string, workerName: string): void;
    static addPattern(pattern: string, className: string, workerName: string): void;
    static addExpected(type: string, className: string, workerName: string, expectedValue: any): void;
    static getExpectedQuery(controllerName: string, workerName: string): any;
    static getExpectedBody(controllerName: string, workerName: string): any;
}
