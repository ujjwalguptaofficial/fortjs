import { RouteHandler } from "../handlers/route_handler";
import { RouteMatch } from "../types/route_match";
import { HTTP_METHOD } from "../enums";
import { removeLastSlash } from ".";
import { RouteInfo } from "../types";

const checkRouteInWorkerForDefaultRoute = (route: RouteInfo, httpMethod: HTTP_METHOD, urlParts: string[]) => {

    const matchedRoute: RouteMatch = {
        allowedHttpMethod: []
    } as RouteMatch;
    matchedRoute.controller = route.controller;
    const urlPartLength = urlParts.length;

    const regex1 = /{(.*)}(?!.)/;
    const regex2 = /{(.*)}\.(\w+)(?!.)/;
    route.workers.every(routeActionInfo => {
        const patternSplit = routeActionInfo.pattern.split("/");
        if (urlPartLength === patternSplit.length) {
            let isMatched = true;
            const params = {};
            urlParts.every((urlPart, i) => {
                const regMatch1 = patternSplit[i].match(regex1);
                const regMatch2 = patternSplit[i].match(regex2);
                if (regMatch1 != null) {
                    params[regMatch1[1]] = urlPart;
                }
                else if (regMatch2 != null) {
                    const splitByDot = urlPart.split(".");
                    if (splitByDot[1] === regMatch2[2]) {
                        params[regMatch2[1]] = splitByDot[0];
                    }
                    else {
                        isMatched = false;
                        return false;
                    }
                }
                else if (urlPart !== patternSplit[i]) {
                    isMatched = false;
                    return false;
                }
                return true;
            });
            if (isMatched === true) {
                if (routeActionInfo.methodsAllowed.indexOf(httpMethod) >= 0) {
                    matchedRoute.actionInfo = routeActionInfo;
                    matchedRoute.params = params;
                    matchedRoute.shields = route.shields;
                    return false;
                }
                else {
                    matchedRoute.allowedHttpMethod = [...matchedRoute.allowedHttpMethod, ...routeActionInfo.methodsAllowed];
                }
            }
        }
        return true;
    });
    if (matchedRoute.actionInfo == null && matchedRoute.allowedHttpMethod.length === 0) {
        return null;
    }
    return matchedRoute;

};


const checkRouteInWorker = (route: RouteInfo, httpMethod: HTTP_METHOD, urlParts: string[]) => {
    const matchedRoute: RouteMatch = {
        allowedHttpMethod: []
    } as RouteMatch;
    matchedRoute.controller = route.controller;
    const urlPartLength = urlParts.length;
    if (urlPartLength === 2) { // url does not have action path
        const pattern = `/${route.path}/`;
        route.workers.every(action => {
            if (action.pattern === pattern) {
                if (action.methodsAllowed.indexOf(httpMethod) >= 0) {
                    matchedRoute.actionInfo = action;
                    matchedRoute.params = {};
                    matchedRoute.shields = route.shields;
                    return false;
                }
                else {
                    matchedRoute.allowedHttpMethod = [...matchedRoute.allowedHttpMethod, ...action.methodsAllowed];
                }
            }
            return true;
        });
    }
    else {
        const regex1 = /{(.*)}(?!.)/;
        const regex2 = /{(.*)}\.(\w+)(?!.)/;
        route.workers.every(routeActionInfo => {
            const patternSplit = routeActionInfo.pattern.split("/");
            if (urlPartLength === patternSplit.length) {
                let isMatched = true;
                const params = {};
                urlParts.every((urlPart, i) => {
                    const regMatch1 = patternSplit[i].match(regex1);
                    const regMatch2 = patternSplit[i].match(regex2);
                    if (regMatch1 != null) {
                        params[regMatch1[1]] = urlPart;
                    }
                    else if (regMatch2 != null) {
                        const splitByDot = urlPart.split(".");
                        if (splitByDot[1] === regMatch2[2]) {
                            params[regMatch2[1]] = splitByDot[0];
                        }
                        else {
                            isMatched = false;
                            return false;
                        }
                    }
                    else if (urlPart !== patternSplit[i]) {
                        isMatched = false;
                        return false;
                    }
                    return true;
                });
                if (isMatched === true) {
                    if (routeActionInfo.methodsAllowed.indexOf(httpMethod) >= 0) {
                        matchedRoute.actionInfo = routeActionInfo;
                        matchedRoute.params = params;
                        matchedRoute.shields = route.shields;
                        return false;
                    }
                    else {
                        matchedRoute.allowedHttpMethod = [...matchedRoute.allowedHttpMethod, ...routeActionInfo.methodsAllowed];
                    }
                }
            }
            return true;
        });
    }
    if (matchedRoute.actionInfo == null && matchedRoute.allowedHttpMethod.length === 0) {
        return null;
    }
    return matchedRoute;

};

export const parseAndMatchRoute = (url: string, httpMethod: HTTP_METHOD) => {
    if (url !== "/") {
        url = removeLastSlash(url);
    }

    const urlParts = url.split("/");
    const firstPart = urlParts[1];
    let route = RouteHandler.routerCollection.find(qry => qry.path === firstPart);

    if (route == null) {
        route = RouteHandler.routerCollection.find(qry => qry.path === "*");
        return checkRouteInWorkerForDefaultRoute(route, httpMethod, urlParts);
    }
    else {
        return checkRouteInWorker(route, httpMethod, urlParts);
    }
};