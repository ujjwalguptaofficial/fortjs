import { RouteInfo } from "../types/route_info";
import { GenericShield } from "../models/generic_shield";
import { WorkerInfo } from "../types/worker_info";
import { GenericGuard } from "../models/generic_guard";
import { Route } from "../types/route";
export declare class RouteHandler {
    static readonly routerCollection: RouteInfo[];
    static addToRouterCollection(value: Route): void;
    static addShields(shields: Array<typeof GenericShield>, className: string): void;
    static addWorker(newAction: WorkerInfo, className: string): void;
    static addGuards(guards: Array<typeof GenericGuard>, className: string, actionName: string): void;
    static addPattern(pattern: string, className: string, actionName: string): void;
}
