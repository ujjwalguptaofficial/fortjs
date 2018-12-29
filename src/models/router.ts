import { RouteInfo } from "../types/route_info";
import { RouteHandler } from "../handlers/route_handler";

export class Router {
    routes: RouteInfo[] = RouteHandler.routerCollection;
}