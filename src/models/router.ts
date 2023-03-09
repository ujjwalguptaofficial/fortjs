import { RouteHandler } from "../handlers";

export class Router {
    get routes() {
        return RouteHandler.routerCollection;
    }

    get routesAsArray() {
        return RouteHandler.routesAsArray;
    }

}