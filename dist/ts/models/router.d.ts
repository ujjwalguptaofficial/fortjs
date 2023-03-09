export declare class Router {
    get routes(): {
        [controllerName: string]: import("./route_info").RouteInfo;
    };
    get routesAsArray(): import("./route_info").RouteInfo[];
}
