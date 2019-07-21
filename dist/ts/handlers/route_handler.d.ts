import { RouteInfo, WorkerInfo, ParentRoute } from "../types";
import { GenericShield, GenericGuard } from "../generics";
export declare class RouteHandler {
    static readonly routerCollection: RouteInfo[];
    static addToRouterCollection(value: ParentRoute): void;
    static addConstructorValue(className: string, paramIndex: any, paramValue: any): void;
    static addShields(shields: Array<typeof GenericShield>, className: string): void;
    static addWorker(newAction: WorkerInfo, className: string): void;
    static addGuards(guards: Array<typeof GenericGuard>, className: string, actionName: string): void;
    static addPattern(pattern: string, className: string, actionName: string): void;
    static getConstructorValues(className: string): any[];
}
