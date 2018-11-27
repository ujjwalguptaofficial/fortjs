import { IRouteInfo } from "./interfaces/route_info";
import { GenericShield } from "./model/generic_shield";
import { IRouteActionInfo } from "./interfaces/route_action_info";
import { GenericGuard } from "./model/generic_guard";
import { Router } from "./types/router";

const routerCollection: IRouteInfo[] = [];
export class RouteHandler {

    static get routerCollection() {
        return routerCollection;
    }

    static addToRouterCollection(value: Router) {
        const route = routerCollection.find(x => x.controllerName === value.controller.name);
        if (route == null) {
            routerCollection.push({
                actions: [],
                controller: value.controller as any,
                controllerName: value.controller.name,
                path: value.path,
                shields: []
            });
        }
        else {
            route.controller = value.controller as any;
            route.path = value.path;
            // change pattern value since we have controller name now.
            route.actions.forEach(actionInfo => {
                if (actionInfo.pattern.indexOf(value.path) < 0) {
                    actionInfo.pattern = `/${value.path}${actionInfo.pattern}`;
                }
            });
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

    static addWorker(newAction: IRouteActionInfo, className: string) {
        const router = routerCollection.find(x => x.controllerName === className);
        if (router == null) {
            routerCollection.push({
                actions: [newAction],
                controller: null,
                controllerName: className,
                shields: [],
                path: null
            });
        }
        else {
            const savedAction = router.actions.find(val => val.workerName === newAction.workerName);
            if (savedAction == null) {
                newAction.pattern = router.path == null ? newAction.pattern : `/${router.path}${newAction.pattern}`;
                router.actions.push(newAction);
            }
            else {
                savedAction.methodsAllowed = newAction.methodsAllowed;
                savedAction.pattern = router.path == null ? savedAction.pattern : `/${router.path}${savedAction.pattern}`;;
            }
        }
    }

    static addGuards(guards: typeof GenericGuard[], className: string, actionName: string) {
        const index = routerCollection.findIndex(x => x.controllerName === className);
        const pattern = actionName.toLowerCase();
        if (index < 0) {
            routerCollection.push({
                actions: [{
                    workerName: actionName,
                    guards: guards,
                    methodsAllowed: null,
                    pattern: pattern
                }],
                controller: null,
                controllerName: className,
                shields: [],
                path: null
            });
        }
        else {
            const savedAction = routerCollection[index].actions.find(val => val.workerName === actionName);
            if (savedAction == null) {
                routerCollection[index].actions.push({
                    workerName: actionName,
                    guards: guards,
                    methodsAllowed: null,
                    pattern: pattern
                });
            }
            else {
                savedAction.guards = guards;
            }
        }
    }

    static addPattern(pattern: string, className: string, actionName: string) {
        const router = routerCollection.find(x => x.controllerName === className);
        if (router == null) {
            routerCollection.push({
                actions: [{
                    workerName: actionName,
                    guards: [],
                    methodsAllowed: null,
                    pattern: pattern
                }],
                controller: null,
                controllerName: className,
                shields: [],
                path: null
            });
        }
        else {
            const savedAction = router.actions.find(val => val.workerName === actionName);
            pattern = router.path == null ? pattern : `/${router.path}${pattern}`;
            if (savedAction == null) {
                router.actions.push({
                    workerName: actionName,
                    guards: [],
                    methodsAllowed: null,
                    pattern: pattern
                });
            }
            else {
                savedAction.pattern = pattern;
            }
        }
    }
}