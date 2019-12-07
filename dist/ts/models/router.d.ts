import { RouteInfo } from "./route_info";
export declare class Router {
    readonly routes: {
        [controllerName: string]: RouteInfo;
    };
    readonly routesAsArray: RouteInfo[];
}
