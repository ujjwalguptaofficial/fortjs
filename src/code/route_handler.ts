
import { IRouteInfo } from "./interfaces/route_info";
import { Shield } from "./abstracts";
import { GenericShield } from "./model/generic_shield";
import { IRouteActionInfo } from "./interfaces/route_action_info";
import { GenericGuard } from "./model/generic_guard";

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

    static addShields(shields: typeof GenericShield[], className: string) {
        const index = routerCollection.findIndex(x => x.controllerName === className);
        if (index < 0) {
            routerCollection.push({
                actions: [],
                controller: null,
                controllerName: className,
                shields: shields,
                path: null
            });
        }
        else {
            routerCollection[index].shields = shields;
        }
    }

    static addAction(newAction: IRouteActionInfo, className: string) {
        const index = routerCollection.findIndex(x => x.controllerName === className);
        if (index < 0) {
            routerCollection.push({
                actions: [newAction],
                controller: null,
                controllerName: className,
                shields: [],
                path: null
            });
        }
        else {
            const savedAction = routerCollection[index].actions.find(val => val.action === newAction.action);
            if (savedAction == null) {
                routerCollection[index].actions.push(newAction);
            }
            else {
                savedAction.methodsAllowed = newAction.methodsAllowed;
            }

        }
    }

    static addGuards(guards: typeof GenericGuard[], className: string, actionName: string) {
        const index = routerCollection.findIndex(x => x.controllerName === className);
        if (index < 0) {
            routerCollection.push({
                actions: [{
                    action: actionName,
                    guards: guards,
                    methodsAllowed: null
                }],
                controller: null,
                controllerName: className,
                shields: [],
                path: null
            });
        }
        else {
            const savedAction = routerCollection[index].actions.find(val => val.action === actionName);
            if (savedAction == null) {
                routerCollection[index].actions.push({
                    action: actionName,
                    guards: guards,
                    methodsAllowed: null
                });
            }
            else {
                savedAction.guards = guards;
            }

        }
    }
}