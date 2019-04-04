import { RouteInfo, WorkerInfo, ParentRoute } from "../types";
import { GenericShield, GenericGuard } from "../generics";

const routerCollection: RouteInfo[] = [];
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
                shields: []
            });
        }
        else {
            route.controller = value.controller as any;
            route.path = value.path;
            // change pattern value since we have controller name now.
            route.workers.forEach(actionInfo => {
                // check if we are not adding again
                // if (actionInfo.pattern.indexOf(value.path) < 0) {
                actionInfo.pattern = `/${value.path}${actionInfo.pattern}`;
                //}
            });
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
                path: null
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
                path: null
            });
        }
        else {
            const savedAction = router.workers.find(val => val.workerName === newAction.workerName);
            if (savedAction == null) {
                newAction.pattern = router.path == null ? newAction.pattern : `/${router.path}${newAction.pattern}`;
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
                    pattern: pattern
                }],
                controller: null,
                controllerName: className,
                shields: [],
                path: null
            });
        }
        else {
            const savedAction = routerCollection[index].workers.find(val => val.workerName === actionName);
            if (savedAction == null) {
                routerCollection[index].workers.push({
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
                workers: [{
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
            const savedAction = router.workers.find(val => val.workerName === actionName);
            pattern = router.path == null ? pattern : `/${router.path}${pattern}`;
            if (savedAction == null) {
                router.workers.push({
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