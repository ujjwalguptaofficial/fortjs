import { RouteHandler } from "../route_handler";
import { IRouteMatch } from "../interfaces/route_match";
import { Global } from "../global";
import { HTTP_METHOD } from "../enums";


export function parseAndMatchRoute(url: string, reqMethod: HTTP_METHOD) {
    const urlLength = url.length;
    // removing / from url;
    if (url[urlLength - 1] === "/") {
        url = url.substr(0, urlLength - 1);
    }
    // add default path if url is /
    if (url === "") {
        url += Global.defaultPath;
    }
    //url += url === "" ? Global.defaultPath : "";
    const urlParts = url.split("/");
    let matchedRoute: IRouteMatch = {
        allows: []
    } as IRouteMatch;
    const firstPart = urlParts[1];
    const route = RouteHandler.routerCollection.find(qry => qry.alias === firstPart);
    if (route != null) {
        matchedRoute.controller = route.controller;
        const urlPartLength = urlParts.length;
        if (urlPartLength === 2) { // url does not have action path
            route.actions.every(action => {
                if (action.pattern.indexOf("//") >= 0) {
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
            route.actions.every(routeActionInfo => {
                const patternSplit = routeActionInfo.pattern.split("/");
                if (urlPartLength === patternSplit.length) {
                    let isMatched = true;
                    const params = {};
                    urlParts.every((urlPart, i) => {
                        const regMatch = patternSplit[i].match(/{(.*)}/);
                        if (regMatch != null) {
                            params[regMatch[1]] = urlPart;
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
}