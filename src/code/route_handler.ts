import { IRouteInfo } from "./interfaces/route_info";
import { GenericShield } from "./model/generic_shield";
import { IRouteActionInfo } from "./interfaces/route_action_info";
import { GenericGuard } from "./model/generic_guard";

const routerCollection: IRouteInfo[] = [];
export class RouteHandler {

    static get routerCollection() {
        return routerCollection;
    }

    static addToRouterCollection(value: IRouteInfo) {
        const route = routerCollection.find(x => x.controllerName === value.controllerName);
        if (route == null) {
            routerCollection.push(value);
        }
        else {
            route.controller = value.controller;
            route.alias = value.alias;
            // change pattern value since we have controller name now.
            route.actions.forEach(actionInfo => {
                if (actionInfo.pattern.indexOf(value.alias) < 0) {
                    actionInfo.pattern = `/${value.alias}/${actionInfo.pattern}`;
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
                alias: null
            });
        }
        else {
            routerCollection[index].shields = shields;
        }
    }

    static addAction(newAction: IRouteActionInfo, className: string, isDefault?: boolean) {
        const router = routerCollection.find(x => x.controllerName === className);
        if (router == null) {
            routerCollection.push({
                actions: [newAction],
                controller: null,
                controllerName: className,
                shields: [],
                alias: null,
                defaultAction: isDefault === true ? newAction.action : ""
            });
        }
        else {
            if (isDefault === true) {
                router.defaultAction = newAction.action
            }
            const savedAction = router.actions.find(val => val.action === newAction.action);
            if (savedAction == null) {
                newAction.pattern = router.alias == null ? newAction.pattern : `/${router.alias}/${newAction.pattern}`;
                router.actions.push(newAction);
            }
            else {
                savedAction.methodsAllowed = newAction.methodsAllowed;
                savedAction.pattern = router.alias == null ? savedAction.pattern : `/${router.alias}/${savedAction.pattern}`;;
            }
        }
    }

    static addGuards(guards: typeof GenericGuard[], className: string, actionName: string) {
        const index = routerCollection.findIndex(x => x.controllerName === className);
        const pattern = actionName.toLowerCase();
        if (index < 0) {
            routerCollection.push({
                actions: [{
                    action: actionName,
                    guards: guards,
                    methodsAllowed: null,
                    pattern: pattern
                }],
                controller: null,
                controllerName: className,
                shields: [],
                alias: null
            });
        }
        else {
            const savedAction = routerCollection[index].actions.find(val => val.action === actionName);
            if (savedAction == null) {
                routerCollection[index].actions.push({
                    action: actionName,
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
                    action: actionName,
                    guards: [],
                    methodsAllowed: null,
                    pattern: pattern
                }],
                controller: null,
                controllerName: className,
                shields: [],
                alias: null
            });
        }
        else {
            const savedAction = router.actions.find(val => val.action === actionName);
            pattern = router.alias == null ? pattern : `/${router.alias}/${pattern}`;
            if (savedAction == null) {
                router.actions.push({
                    action: actionName,
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