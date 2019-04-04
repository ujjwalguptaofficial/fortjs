import { RouteInfo } from "../types";
import { RouteHandler } from "../handlers";

export class Router {
    routes: RouteInfo[] = RouteHandler.routerCollection;
}