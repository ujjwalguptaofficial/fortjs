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
                workers: {},
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
            for (const workerName in route.workers) {
                const actionInfo = route.workers[workerName];
                actionInfo.pattern = getActionPattern(value, actionInfo.pattern);
            }
        }
    }

    static addShields(shields: Array<typeof GenericShield>, className: string) {
        const index = routerCollection.findIndex(x => x.controllerName === className);
        if (index < 0) {
            routerCollection.push({
                workers: {},
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

    static addWorker(newWorker: WorkerInfo, className: string) {
        const workerName = newWorker.workerName;
        const router = routerCollection.find(x => x.controllerName === className);
        if (router == null) {
            routerCollection.push({
                workers: {
                    [workerName]: newWorker
                },
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = router.workers[workerName];
            if (savedAction == null) {
                newWorker.pattern = getActionPattern(router, newWorker.pattern);
                router.workers[workerName] = newWorker;
            }
            else {
                savedAction.methodsAllowed = newWorker.methodsAllowed;
                savedAction.pattern = router.path == null ? savedAction.pattern : `/${router.path}${savedAction.pattern}`;
            }
        }
    }

    static addGuards(guards: Array<typeof GenericGuard>, className: string, workerName: string) {
        const index = routerCollection.findIndex(x => x.controllerName === className);
        const pattern = workerName.toLowerCase();
        if (index < 0) {
            routerCollection.push({
                workers: {
                    [workerName]: {
                        workerName: workerName,
                        guards: guards,
                        methodsAllowed: null,
                        pattern: pattern,
                        values: []
                    }
                },
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = routerCollection[index].workers[workerName];
            if (savedAction == null) {
                routerCollection[index].workers[workerName] = {
                    workerName: workerName,
                    guards: guards,
                    methodsAllowed: null,
                    pattern: pattern,
                    values: []
                };
            }
            else {
                savedAction.guards = guards;
            }
        }
    }

    static addPattern(pattern: string, className: string, workerName: string) {
        const router = routerCollection.find(x => x.controllerName === className);
        if (router == null) {
            routerCollection.push({
                workers: {
                    [workerName]: {
                        workerName: workerName,
                        guards: [],
                        methodsAllowed: null,
                        pattern: pattern,
                        values: []
                    }
                },
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = router.workers[workerName];
            pattern = getActionPattern(router, pattern);
            if (savedAction == null) {
                router.workers[workerName] = {
                    workerName: workerName,
                    guards: [],
                    methodsAllowed: null,
                    pattern: pattern,
                    values: []
                };
            }
            else {
                savedAction.pattern = pattern;
            }
        }
    }
}