import { RouteHandler } from "../handlers/route_handler";
import { RouteMatch } from "../types/route_match";
import { Global } from "../global";
import { HTTP_METHOD } from "../enums";
import { removeLastSlace } from ".";


export const parseAndMatchRoute = (url: string, reqMethod: HTTP_METHOD) => {

    url = removeLastSlace(url);
    // add default path if url is /
    if (url === "") {
        url = Global.defaultPath;
    }
    const urlParts = url.split("/");
    const matchedRoute: RouteMatch = {
        allows: []
    } as RouteMatch;
    const firstPart = urlParts[1];
    const route = RouteHandler.routerCollection.find(qry => qry.path === firstPart);
    if (route != null) {
        matchedRoute.controller = route.controller;
        const urlPartLength = urlParts.length;
        if (urlPartLength === 2) { // url does not have action path
            const pattern = `/${route.path}/`;
            route.workers.every(action => {
                if (action.pattern === pattern) {
                    if (action.methodsAllowed.indexOf(reqMethod) >= 0) {
                        matchedRoute.actionInfo = action;
                        matchedRoute.params = {};
                        matchedRoute.shields = route.shields;
                        return false;
                    }
                    else {
                        matchedRoute.allows = [...matchedRoute.allows, ...action.methodsAllowed];
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
                        if (routeActionInfo.methodsAllowed.indexOf(reqMethod) >= 0) {
                            matchedRoute.actionInfo = routeActionInfo;
                            matchedRoute.params = params;
                            matchedRoute.shields = route.shields;
                            return false;
                        }
                        else {
                            matchedRoute.allows = [...matchedRoute.allows, ...routeActionInfo.methodsAllowed];
                        }
                    }
                }
                return true;
            });
        }
        if (matchedRoute.controller == null) {
            return null;
        }
        else if (matchedRoute.actionInfo == null && matchedRoute.allows.length === 0) {
            return null;
        }
        return matchedRoute;
    }
    return null;
};