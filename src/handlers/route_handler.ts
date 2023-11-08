import { IWorkerInfo, ParentRoute } from "../types";
import { GenericShield, GenericGuard } from "../generics";
import { compareString, isNull } from "../utils";
import { RouteInfo, WorkerInfo } from "../models";
import { IRouteInfo } from "../interfaces";
import { getDataType } from "../helpers";

const routerCollection = new Map<string, RouteInfo>();

const pushRouterIntoCollection = (route: IRouteInfo) => {
    const routeObj = new RouteInfo(route);
    routerCollection.set(route.controllerName, routeObj);
};

const getWorkerPattern = (parentRoute: ParentRoute, pattern: string) => {
    const routeWithParent = (isNull(parentRoute.path) || parentRoute.path === "/*") ? pattern : `${parentRoute.path}${pattern}`;
    return routeWithParent;
};

export class RouteHandler {

    static get routerCollection() {
        return routerCollection;
    }

    static get routesAsArray() {
        return Array.from(routerCollection.keys()).map(workerName => {
            return routerCollection.get(workerName);
        });
    }

    static findControllerFromPath(urlParts: string[]) {
        for (const [key, controller] of routerCollection.entries()) {
            let isMatched: boolean = false as any;
            const patternSplit = controller.pathSplitted;
            patternSplit.every((patternPart, i) => {
                isMatched = compareString(urlParts[i], patternPart);
                return isMatched;
            });
            if (isMatched === true) {
                return controller;
            }
        }
    }

    static getControllerFromName(name: string) {
        return routerCollection.get(name);
    }

    static get defaultRoute() {
        return routerCollection.get(RouteHandler.defaultRouteControllerName);
    }

    static defaultRouteControllerName: string;

    static addToRouterCollection(value: ParentRoute) {
        const route = routerCollection.get(value.controller.name);
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
                actionInfo.pattern = getWorkerPattern(value, actionInfo.pattern);
            }
        }
    }

    static addShields(shields: Array<typeof GenericShield>, className: string) {
        const route = routerCollection.get(className);
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
            route.shields = route.shields ? [...route.shields, ...shields] : shields;
        }
    }

    static addWorker(newWorker: IWorkerInfo, className: string) {

        const workerName = newWorker.workerName;
        const route = routerCollection.get(className);
        if (route == null) {
            pushRouterIntoCollection({
                workers: {
                    [workerName]: new WorkerInfo(newWorker)
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
                newWorker.pattern = getWorkerPattern(route, newWorker.pattern);
                route.workers[workerName] = new WorkerInfo(newWorker);
            }
            else {
                savedAction.methodsAllowed = newWorker.methodsAllowed;
                savedAction.pattern = getWorkerPattern(route, savedAction.pattern);
                // route.path == null ? savedAction.pattern : `/${route.path}${savedAction.pattern}`;
            }
        }
    }

    static addGuards(guards: Array<typeof GenericGuard>, className: string, workerName: string) {

        const route = routerCollection.get(className);
        const pattern = workerName.toLowerCase();
        if (route == null) {
            pushRouterIntoCollection({
                workers: {
                    [workerName]: new WorkerInfo({
                        workerName: workerName,
                        guards: guards,
                        methodsAllowed: null,
                        pattern: pattern,
                        values: []
                    })
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
                route.workers[workerName] = new WorkerInfo({
                    workerName: workerName,
                    guards: guards,
                    methodsAllowed: null,
                    pattern: pattern,
                    values: []
                });
            }
            else {
                savedAction.guards = savedAction.guards ? [...savedAction.guards, ...guards]
                    : guards;
            }
        }
    }

    static addPattern(pattern: string, className: string, workerName: string) {
        const route = routerCollection.get(className);
        if (route == null) {
            pushRouterIntoCollection({
                workers: {
                    [workerName]: new WorkerInfo({
                        workerName: workerName,
                        guards: [],
                        methodsAllowed: null,
                        pattern: pattern,
                        values: []
                    })
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
            const workerRouteWithController = getWorkerPattern(route, pattern);
            if (savedAction == null) {
                route.workers[workerName] = new WorkerInfo({
                    workerName: workerName,
                    guards: [],
                    methodsAllowed: null,
                    pattern: workerRouteWithController,
                    values: []
                });
            }
            else {
                savedAction.pattern = workerRouteWithController;
            }
        }
    }

    static addExpected(type: string, className: string, workerName: string, expectedValue: any) {

        for (const prop in expectedValue) {
            const propValue = expectedValue[prop];
            expectedValue[prop] = getDataType(propValue);
        }

        const isQuery = type === 'query';
        const pattern = workerName.toLowerCase();
        const router = routerCollection.get(className);
        const worker = new WorkerInfo({
            workerName: workerName,
            guards: [],
            methodsAllowed: null,
            pattern: pattern,
            values: [],
            expectedQuery: isQuery ? expectedValue : null,
            expectedBody: isQuery ? null : expectedValue
        } as IWorkerInfo);
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
        return routerCollection.get(controllerName).workers[workerName].expectedQuery;
    }

    static getExpectedBody(controllerName: string, workerName: string) {
        return routerCollection.get(controllerName).workers[workerName].expectedBody;
    }

}