import { WorkerInfo, ParentRoute } from "../types";
import { GenericShield, GenericGuard } from "../generics";
import { isNull } from "../utils";
import { RouteInfo } from "../models";
import { IRouteInfo } from "../interfaces";

const routerCollection: {
    [controllerName: string]: RouteInfo
} = {};

const pushRouterIntoCollection = (route: IRouteInfo) => {
    const routeObj = new RouteInfo();
    routeObj.init(route);
    routerCollection[route.controllerName] = routeObj;
};

const getActionPattern = (parentRoute: ParentRoute, pattern: string) => {
    return (isNull(parentRoute.path) || parentRoute.path === "*") ? pattern : `/${parentRoute.path}${pattern}`;
};

export class RouteHandler {

    static get routerCollection() {
        return routerCollection;
    }

    static get routesAsArray() {
        return Object.keys(routerCollection).map(workerName => {
            return routerCollection[workerName];
        });
    }

    static findControllerFromPath(path: string) {
        for (const controllerName in routerCollection) {
            if (routerCollection[controllerName].path === path) {
                return routerCollection[controllerName];
            }
        }
    }

    static addToRouterCollection(value: ParentRoute) {
        const route = routerCollection[value.controller.name];
        if (route == null) {
            pushRouterIntoCollection({
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
        const route = routerCollection[className];
        if (route == null) {
            pushRouterIntoCollection({
                workers: {},
                controller: null,
                controllerName: className,
                shields: shields,
                path: null,
                values: []
            });
        }
        else {
            route.shields = shields;
        }
    }

    static addWorker(newWorker: WorkerInfo, className: string) {
        const workerName = newWorker.workerName;
        const route = routerCollection[className];
        if (route == null) {
            pushRouterIntoCollection({
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
            const savedAction = route.workers[workerName];
            if (savedAction == null) {
                newWorker.pattern = getActionPattern(route, newWorker.pattern);
                route.workers[workerName] = newWorker;
            }
            else {
                savedAction.methodsAllowed = newWorker.methodsAllowed;
                savedAction.pattern = route.path == null ? savedAction.pattern : `/${route.path}${savedAction.pattern}`;
            }
        }
    }

    static addGuards(guards: Array<typeof GenericGuard>, className: string, workerName: string) {
        const route = routerCollection[className];
        const pattern = workerName.toLowerCase();
        if (route == null) {
            pushRouterIntoCollection({
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
            const savedAction = route.workers[workerName];
            if (savedAction == null) {
                route.workers[workerName] = {
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
        const route = routerCollection[className];
        if (route == null) {
            pushRouterIntoCollection({
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
            const savedAction = route.workers[workerName];
            pattern = getActionPattern(route, pattern);
            if (savedAction == null) {
                route.workers[workerName] = {
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

    static addExpected(type: string, className: string, workerName: string, expectedValue: any) {
        const isQuery = type === 'query';
        const pattern = workerName.toLowerCase();
        const router = routerCollection[className];
        const worker = {
            workerName: workerName,
            guards: [],
            methodsAllowed: null,
            pattern: pattern,
            values: [],
            expectedQuery: isQuery ? expectedValue : null,
            expectedBody: isQuery ? null : expectedValue
        };
        if (router == null) {
            pushRouterIntoCollection({
                workers: {
                    [workerName]: worker
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
                router.workers[workerName] = worker;
            }
            else {
                savedAction.expectedQuery = worker.expectedQuery;
                savedAction.expectedBody = worker.expectedBody;
            }
        }
    }

    static getExpectedQuery(controllerName: string, workerName: string) {
        return routerCollection[controllerName].workers[workerName].expectedQuery;
    }

    static getExpectedBody(controllerName: string, workerName: string) {
        return routerCollection[controllerName].workers[workerName].expectedBody;
    }

}