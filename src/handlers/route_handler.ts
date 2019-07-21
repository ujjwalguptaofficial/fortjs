import { RouteInfo, WorkerInfo, ParentRoute } from "../types";
import { GenericShield, GenericGuard } from "../generics";
import { isNull } from "../utils";

const routerCollection: RouteInfo[] = [];

const getActionPattern = (parentRoute: ParentRoute, pattern: string) => {
    return (isNull(parentRoute.path) || parentRoute.path === "*") ? pattern : `/${parentRoute.path}${pattern}`;
};

export class RouteHandler {

    static get routerCollection() {
        return routerCollection;
    }

    static addToRouterCollection(value: ParentRoute) {
        const route = routerCollection.find(x => x.controllerName === value.controller.name);
        if (route == null) {
            routerCollection.push({
                workers: [],
                controller: value.controller as any,
                controllerName: value.controller.name,
                path: value.path,
                shields: [],
                values: []
            });
        }
        else {
            route.controller = value.controller as any;
            route.path = value.path;
            // change pattern value since we have controller name now.
            route.workers.forEach(actionInfo => {
                actionInfo.pattern = getActionPattern(value, actionInfo.pattern);
            });
        }
    }

    static addConstructorValue(className: string, paramIndex, paramValue) {
        const index = routerCollection.findIndex(x => x.controllerName === className);
        if (index < 0) {
            routerCollection.push({
                workers: [],
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: [paramValue]
            });
        }
        else {
            routerCollection[index].values.splice(paramIndex, 0, paramValue);
        }
    }

    static addWorkerValue(className: string, paramName: string, paramIndex, paramValue) {
        const router = routerCollection.find(x => x.controllerName === className);
        const action = {
            guards: [],
            methodsAllowed: [],
            pattern: "",
            values: [paramValue],
            workerName: paramName
        };
        if (router == null) {
            routerCollection.push({
                workers: [action],
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = router.workers.find(val => val.workerName === paramName);
            if (savedAction == null) {
                router.workers.push(action);
            }
            else {
                savedAction.values.splice(paramIndex, 0, paramValue);
            }
        }
    }

    static addShields(shields: Array<typeof GenericShield>, className: string) {
        const index = routerCollection.findIndex(x => x.controllerName === className);
        if (index < 0) {
            routerCollection.push({
                workers: [],
                controller: null,
                controllerName: className,
                shields: shields,
                path: null,
                values: []
            });
        }
        else {
            routerCollection[index].shields = shields;
        }
    }

    static addWorker(newAction: WorkerInfo, className: string) {
        const router = routerCollection.find(x => x.controllerName === className);
        if (router == null) {
            routerCollection.push({
                workers: [newAction],
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = router.workers.find(val => val.workerName === newAction.workerName);
            if (savedAction == null) {
                newAction.pattern = getActionPattern(router, newAction.pattern);
                router.workers.push(newAction);
            }
            else {
                savedAction.methodsAllowed = newAction.methodsAllowed;
                savedAction.pattern = router.path == null ? savedAction.pattern : `/${router.path}${savedAction.pattern}`;
            }
        }
    }

    static addGuards(guards: Array<typeof GenericGuard>, className: string, actionName: string) {
        const index = routerCollection.findIndex(x => x.controllerName === className);
        const pattern = actionName.toLowerCase();
        if (index < 0) {
            routerCollection.push({
                workers: [{
                    workerName: actionName,
                    guards: guards,
                    methodsAllowed: null,
                    pattern: pattern,
                    values: []
                }],
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = routerCollection[index].workers.find(val => val.workerName === actionName);
            if (savedAction == null) {
                routerCollection[index].workers.push({
                    workerName: actionName,
                    guards: guards,
                    methodsAllowed: null,
                    pattern: pattern,
                    values: []
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
                workers: [{
                    workerName: actionName,
                    guards: [],
                    methodsAllowed: null,
                    pattern: pattern,
                    values: []
                }],
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = router.workers.find(val => val.workerName === actionName);
            pattern = getActionPattern(router, pattern);
            if (savedAction == null) {
                router.workers.push({
                    workerName: actionName,
                    guards: [],
                    methodsAllowed: null,
                    pattern: pattern,
                    values: []
                });
            }
            else {
                savedAction.pattern = pattern;
            }
        }
    }

    static getConstructorValues(className: string) {
        return routerCollection.find(qry => qry.controllerName === className).values;
    }

    static getWorkerValues(className: string, workerName: string) {
        return routerCollection.find(qry => qry.controllerName === className).workers.find(qry => qry.workerName === workerName).values;
    }
}