import { Router } from "./types/router";
import { FortWall } from "./abstracts";
import { AppOption } from "./types";
import { create } from "./create";
import { RouteHandler } from "./route_handler";
import { Global } from "./global";

export class Fort {
    routers: Router[] = [];
    walls: typeof FortWall[] = [];

    create(option: AppOption) {
        this.routers.forEach(route => {
            if (route.path[0] === "/") {
                route.path = route.path.substr(1);
            }
            RouteHandler.addToRouterCollection(route);
        });
        create(option);
    }
}