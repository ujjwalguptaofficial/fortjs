
import { IRouteInfo } from "./interfaces/route_info";
import { Guard } from "./abstracts";
import { IRouteActionInfo } from "./interfaces";

const routerCollection: IRouteInfo[] = [];
export class RouteHandler {

    static get routerCollection() {
        return routerCollection;
    }

    static addToRouterCollection(value: IRouteInfo) {
        const index = routerCollection.findIndex(x => x.controllerName === value.controllerName);
        if (index < 0) {
            routerCollection.push(value);
        }
        else {
            routerCollection[index].controller = value.controller;
            routerCollection[index].path = value.path;
        }
    }

    static addAction(action: IRouteActionInfo, className: string) {
        const index = routerCollection.findIndex(x => x.controllerName === className);
        if (index < 0) {
            routerCollection.push({
                actions: [action],
                controller: null,
                controllerName: className,
                guards: [],
                path: null
            });
        }
        else {
            routerCollection[index].actions.push(action);
        }
    }

    static addGuards(guards: Guard[], className: string) {
        const index = routerCollection.findIndex(x => x.controllerName === className);
        if (index < 0) {
            routerCollection.push({
                actions: [],
                controller: null,
                controllerName: className,
                guards: guards,
                path: null
            });
        }
        else {
            routerCollection[index].guards = guards;
        }
    }
}