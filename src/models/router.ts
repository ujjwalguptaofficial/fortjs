import { RouteHandler } from "../handlers";
import { RouteInfo } from "./route_info";

export class Router {
    routes: RouteInfo[] = RouteHandler.routerCollection;
}