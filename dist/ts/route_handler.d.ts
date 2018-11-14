import { IRouteInfo } from "./interfaces/route_info";
import { GenericShield } from "./model/generic_shield";
import { IRouteActionInfo } from "./interfaces/route_action_info";
import { GenericGuard } from "./model/generic_guard";
export declare class RouteHandler {
    static readonly routerCollection: IRouteInfo[];
    static addToRouterCollection(value: IRouteInfo): void;
    static addShields(shields: typeof GenericShield[], className: string): void;
    static addAction(newAction: IRouteActionInfo, className: string, isDefault?: boolean): void;
    static addGuards(guards: typeof GenericGuard[], className: string, actionName: string): void;
    static addPattern(pattern: string, className: string, actionName: string): void;
}
