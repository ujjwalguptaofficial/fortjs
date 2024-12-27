import { TFileProcessor, TGuard, TShield } from "../types";
import { compareString, isNull } from "../utils";
import { RouteInfo, WorkerInfo } from "../models";
import { IRouteInfo, IControllerRoute, IWorkerInfo, IRouteMatch, ICacheOptionStored } from "../interfaces";
import { getDataType } from "../helpers";

const routerCollection = new Map<string, RouteInfo>();

const pushRouterIntoCollection = (route: IRouteInfo) => {
    const routeObj = new RouteInfo(route);
    routerCollection.set(route.controllerName, routeObj);
};

const getWorkerPattern = (controllerPath: string, pattern: string) => {
    const routeWithParent = (isNull(controllerPath) || controllerPath === "/*") ? pattern : `${controllerPath}${pattern}`;
    return routeWithParent;
};

const routeCache = new Map<string, IRouteMatch>();

function isControllerMatched(controller: RouteInfo, urlParts: string[]) {
    let isMatched: boolean;
    const patternSplit = controller.pathSplitted;
    patternSplit.every((patternPart, i) => {
        isMatched = compareString(urlParts[i], patternPart);
        return isMatched;
    });
    return isMatched;
}

function findControllerChildren(urlParts: string[], parentController: RouteInfo) {
    const childRoutes = parentController.partialRoutes;
    if (!childRoutes) return;
    urlParts = urlParts.slice(parentController.pathSplitted.length)

    for (const index in childRoutes) {
        const d = childRoutes[index];
        const controller = RouteHandler.getControllerFromName(d.controllerName);
        const isMatched = isControllerMatched(controller, urlParts);
        if (isMatched === true) {
            const childController: RouteInfo = findControllerChildren(
                urlParts,
                controller
            );
            return childController || controller;
        }
    }
}

function getPartialRoutes(route: IControllerRoute, parentRoute: RouteInfo) {
    return route.children && route.children.map(child => {
        const controllerName = child.controller.name
        const savedRoute = routerCollection.get(controllerName);
        savedRoute.path = child.path;
        const controllerRoutePath = `${route.path}/${child.path}`;
        child.path = controllerRoutePath;
        savedRoute.workers.forEach(worker => {
            worker.pattern = getWorkerPattern(controllerRoutePath, worker.pattern);
        });
        savedRoute.shields.unshift(
            ...parentRoute.shields
        );
        savedRoute.controller = child.controller;
        savedRoute.partialRoutes = getPartialRoutes(
            child, savedRoute
        )
        return {
            controllerName: controllerName,
            path: child.path
        }
    });
}

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
        for (const controller of routerCollection.values()) {
            const isMatched = isControllerMatched(controller, urlParts);
            if (isMatched === true) {
                const childController = findControllerChildren(
                    urlParts,
                    controller
                );
                return childController || controller;
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

    static addToRouterCollection(inputRoute: IControllerRoute) {
        const route = routerCollection.get(inputRoute.controller.name);
        const partialRoutes = getPartialRoutes(
            inputRoute, route
        )
        if (route == null) {
            pushRouterIntoCollection({
                workers: new Map(),
                controller: inputRoute.controller,
                controllerName: inputRoute.controller.name,
                path: inputRoute.path,
                shields: [],
                values: [],
                partialRoutes: partialRoutes
            });
        }
        else {
            route.controller = inputRoute.controller;
            route.path = inputRoute.path;
            route.partialRoutes = partialRoutes
            // change pattern value since we have controller name now.
            route.workers.forEach(worker => {
                worker.pattern = getWorkerPattern(inputRoute.path, worker.pattern);
            })
        }
    }

    static addShields(shields: Array<TShield>, className: string) {
        const route = routerCollection.get(className);
        if (route == null) {
            pushRouterIntoCollection({
                workers: new Map(),
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
                workers: new Map([
                    [workerName, new WorkerInfo(newWorker)]
                ]),
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = route.workers.get(workerName);
            if (savedAction == null) {
                newWorker.pattern = getWorkerPattern(route.path, newWorker.pattern);
                route.workers.set(workerName, new WorkerInfo(newWorker));
            }
            else {
                savedAction.methodsAllowed = newWorker.methodsAllowed;
                savedAction.pattern = getWorkerPattern(route.path, savedAction.pattern);
                // route.path == null ? savedAction.pattern : `/${route.path}${savedAction.pattern}`;
            }
        }
    }

    static addGuards(guards: Array<TGuard>, className: string, workerName: string) {

        const route = routerCollection.get(className);
        const pattern = workerName.toLowerCase();
        if (route == null) {
            pushRouterIntoCollection({
                workers: new Map([
                    [workerName, new WorkerInfo({
                        workerName: workerName,
                        guards: guards,
                        methodsAllowed: null,
                        pattern: pattern,
                        values: []
                    })]
                ]),
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = route.workers.get(workerName);
            if (savedAction == null) {
                route.workers.set(
                    workerName,
                    new WorkerInfo({
                        workerName: workerName,
                        guards: guards,
                        methodsAllowed: null,
                        pattern: pattern,
                        values: []
                    })
                );
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
                workers: new Map([
                    [workerName, new WorkerInfo({
                        workerName: workerName,
                        guards: [],
                        methodsAllowed: null,
                        pattern: pattern,
                        values: []
                    })]
                ]),
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = route.workers.get(workerName);
            const workerRouteWithController = getWorkerPattern(route.path, pattern);
            if (savedAction == null) {
                route.workers.set(
                    workerName,
                    new WorkerInfo({
                        workerName: workerName,
                        guards: [],
                        methodsAllowed: null,
                        pattern: workerRouteWithController,
                        values: []
                    })
                );
            }
            else {
                savedAction.pattern = workerRouteWithController;
            }
        }
    }

    static addExpected(type: "body" | "query" | "param", className: string, workerName: string, expectedValue: any) {

        for (const prop in expectedValue) {
            const propValue = expectedValue[prop];
            expectedValue[prop] = getDataType(propValue);
        }

        const pattern = workerName.toLowerCase();
        const router = routerCollection.get(className);
        const worker = new WorkerInfo({
            workerName: workerName,
            guards: [],
            methodsAllowed: null,
            pattern: pattern,
            values: []
        } as IWorkerInfo);
        switch (type) {
            case "body":
                worker.expectedBody = expectedValue;
                break;
            case "query":
                worker.expectedQuery = expectedValue;
                break;
            case "param":
                worker.expectedParam = expectedValue;
                break;
        }
        if (router == null) {
            pushRouterIntoCollection({
                workers: new Map([
                    [workerName, worker]
                ]),
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = router.workers.get(workerName);
            if (savedAction == null) {
                router.workers.set(workerName, worker);
            }
            else {
                savedAction.expectedQuery = worker.expectedQuery;
                savedAction.expectedBody = worker.expectedBody;
                savedAction.expectedParam = worker.expectedParam;
            }
        }
    }

    static addCache(cacheOption: ICacheOptionStored, className: string, workerName: string) {
        const route = routerCollection.get(className);
        const pattern = workerName.toLowerCase();
        if (route == null) {
            pushRouterIntoCollection({
                workers: new Map([
                    [workerName, new WorkerInfo({
                        workerName: workerName,
                        guards: [],
                        methodsAllowed: null,
                        pattern: pattern,
                        values: [],
                        cache: cacheOption
                    })]
                ]),
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = route.workers.get(workerName);
            if (savedAction == null) {
                route.workers.set(
                    workerName,
                    new WorkerInfo({
                        workerName: workerName,
                        guards: [],
                        methodsAllowed: null,
                        pattern: pattern,
                        values: [],
                        cache: cacheOption
                    })
                );
            }
            else {
                savedAction.cache = cacheOption;
            }
        }
    }

    static addRouteToCache(url: string, route: IRouteMatch) {
        routeCache.set(url, route);
    }

    static getRouteFromCache(url: string) {
        return routeCache.get(url);
    }

    static addFileProcessor(fileProcessor: TFileProcessor, className: string, workerName: string) {
        const route = routerCollection.get(className);
        const pattern = workerName.toLowerCase();
        if (route == null) {
            pushRouterIntoCollection({
                workers: new Map([
                    [workerName, new WorkerInfo({
                        workerName: workerName,
                        guards: [],
                        methodsAllowed: null,
                        pattern: pattern,
                        values: [],
                        fileProcessor: fileProcessor
                    })]
                ]),
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = route.workers.get(workerName);
            if (savedAction == null) {
                route.workers.set(
                    workerName,
                    new WorkerInfo({
                        workerName: workerName,
                        guards: [],
                        methodsAllowed: null,
                        pattern: pattern,
                        values: [],
                        fileProcessor: fileProcessor
                    })
                );
            }
            else {
                savedAction.fileProcessor = fileProcessor;
            }
        }
    }
}
