import { IRouteInfo } from "./interfaces/route_info";
import { GenericShield } from "./model/generic_shield";
import { IRouteActionInfo } from "./interfaces/route_action_info";
import { GenericGuard } from "./model/generic_guard";
import { Router } from "./types/router";
export declare class RouteHandler {
    static readonly routerCollection: IRouteInfo[];
    static addToRouterCollection(value: Router): void;
    static addShields(shields: typeof GenericShield[], className: string): void;
    static addWorker(newAction: IRouteActionInfo, className: string): void;
    static addGuards(guards: typeof GenericGuard[], className: string, actionName: string): void;
    static addPattern(pattern: string, className: string, actionName: string): void;
}
