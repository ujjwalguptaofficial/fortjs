import { RouteHandler } from "../route_handler";
import { IRouteMatch } from "../interfaces/route_match";
import { FILE_EXTENSION } from "../enums/file_extension";
import { Util } from "../util";
import { Global } from "../global";
import { HTTP_METHOD } from "../enums";

function isRequestFileType(urlParts: string[]) {
    const splitByDotValues = urlParts[urlParts.length - 1].split(".");
    const fileExtension = splitByDotValues[splitByDotValues.length - 1];
    return FILE_EXTENSION[fileExtension] == null ? false : true;
}

export function parseAndMatchRoute(url: string, reqMethod: HTTP_METHOD) {
    const urlLength = url.length;
    // removing / from url;
    if (url[urlLength - 1] === "/") {
        url = url.substr(0, urlLength - 1);
    }
    // add default path if url is /
    url += url === "" ? Global.defaultPath : "";
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
            route.actions.forEach(action => {
                if (action.pattern.indexOf("//") >= 0) {
                    if (action.methodsAllowed.indexOf(reqMethod) >= 0) {
                        matchedRoute.actionInfo = action;
                        matchedRoute.params = {};
                        matchedRoute.shields = route.shields;
                    }
                    else {
                        matchedRoute.allows = [...matchedRoute.allows, ...action.methodsAllowed];
                    }
                }
            });
        }
        else {
            route.actions.forEach(routeActionInfo => {
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
                        }
                        else {
                            matchedRoute.allows = [...matchedRoute.allows, ...routeActionInfo.methodsAllowed];
                        }
                    }
                }
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