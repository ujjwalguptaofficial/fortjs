import { RouteHandler } from "../handlers/route_handler";
import { HTTP_METHOD } from "../enums";
import { removeLastSlash } from "./remove_last_slash";
import { RouteInfo } from "../models";
import { compareString } from "../utils";
import { IRouteMatch } from "../interfaces";

const regex1 = /{(.*)}(?!.)/;
// for extension - e.g - {{file}}.js
const regex2 = /{(.*)}\.(\w+)(?!.)/;

const checkRouteInWorker = (route: RouteInfo, httpMethod: HTTP_METHOD, urlParts: string[]) => {
    const matchedRoute: IRouteMatch = {
        allowedHttpMethod: [],
        controller: route.controller,
        controllerName: route.controllerName
    } as IRouteMatch;

    const urlPartLength = urlParts.length;
    for (const worker of route.workers.values()) {
        const patternSplit = worker.patternSplitted;
        if (urlPartLength !== patternSplit.length) continue;
        let isMatched = true;
        const params = {};
        urlParts.every((urlPart, i) => {
            const patternSplitAtIndex = patternSplit[i];
            // if not equal then check for regex match
            if (compareString(urlPart, patternSplitAtIndex) === false) {
                const regMatch1 = patternSplitAtIndex.match(regex1);
                if (regMatch1 != null) {
                    params[regMatch1[1]] = urlPart;
                    return true;
                }
                const regMatch2 = patternSplitAtIndex.match(regex2);
                if (regMatch2 != null) {
                    const splitByDot = urlPart.split(".");
                    if (splitByDot[1] === regMatch2[2]) {
                        params[regMatch2[1]] = splitByDot[0];
                        return true;
                    }
                }
                isMatched = false;
            }
            // means its direct match
            return isMatched;
        });

        if (isMatched === true) {
            if (!worker.methodsAllowed) {
                throw `Invalid route registration in Controller : ${route.controllerName} and method : ${worker.workerName}.Route exist but method has not been decorated with worker.`;
            }

            if (worker.methodsAllowed.indexOf(httpMethod) >= 0) {
                matchedRoute.workerInfo = worker;
                matchedRoute.params = params;
                matchedRoute.shields = route.shields;
                return matchedRoute;
            }
            else {
                matchedRoute.allowedHttpMethod = [...matchedRoute.allowedHttpMethod, ...worker.methodsAllowed];
            }
        }
    }
    if (matchedRoute.allowedHttpMethod.length === 0) {
        return null;
    }
    matchedRoute.params = {};
    return matchedRoute;

};

export function parseAndMatchRoute(url: string, httpMethod: HTTP_METHOD) {
    url = removeLastSlash(url);
    const urlAndMethod = url + httpMethod;
    const cache = RouteHandler.getRouteFromCache(urlAndMethod);
    if (cache) {
        return cache;
    }
    const urlParts = url.split("/");
    const route = RouteHandler.findControllerFromPath(urlParts);
    const result = route == null ? checkRouteInWorker(RouteHandler.defaultRoute, httpMethod, urlParts) :
        checkRouteInWorker(route, httpMethod, urlParts);
    if (result && Object.keys(result.params).length === 0) {
        RouteHandler.addRouteToCache(urlAndMethod, result);
    }
    return result;
}