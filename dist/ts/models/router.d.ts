import { RouteInfo } from "./route_info";
export declare class Router {
    get routes(): {
        [controllerName: string]: RouteInfo;
    };
    get routesAsArray(): RouteInfo[];
}
