import { RouteHandler } from "../handlers";
import { RouteInfo } from "./route_info";

export class Router {
    get routes() {
        return RouteHandler.routerCollection;
    }

    get routesAsArray() {
        return RouteHandler.routesAsArray;
    }

}