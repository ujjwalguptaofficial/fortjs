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
    let isMatched: boolean = false;
    const urlLength = url.length;
    // removing / from url;
    if (url[urlLength - 1] === "/") {
        url = url.substr(0, urlLength - 1);
    }
    // add default path if url is /
    url += url === "" ? Global.defaultPath : "";
    const urlParts = url.split("/");
    let matchedRoute: IRouteMatch = {
    } as IRouteMatch;
    const firstPart = urlParts[1];
    const route = RouteHandler.routerCollection.find(qry => qry.alias === firstPart);
    if (route != null) {
        matchedRoute.controller = route.controller;
        const urlPartLength = urlParts.length;
        if (urlPartLength === 2) { // url does not have action path
            const action = route.actions.find(qry => qry.pattern.indexOf("//") >= 0 && qry.methodsAllowed != null && qry.methodsAllowed.indexOf(reqMethod) >= 0);
            if (action != null) {
                matchedRoute.actionInfo = action;
                matchedRoute.params = {};
                matchedRoute.shields = route.shields;
                return matchedRoute;
            }
            return null;
            // if (!Util.isNullOrEmpty(route.defaultAction)) {
            //     const routeAction = route.actions.find(qry => qry.action === route.defaultAction);
            //     matchedRoute.actionInfo = routeAction;
            //     matchedRoute.params = {};
            //     matchedRoute.shields = route.shields;
            //     return matchedRoute;
            // }
            // else {
            //     return null;
            // }
        }
        isMatched = true;
        route.actions.every(routeActionInfo => {
            const patternSplit = routeActionInfo.pattern.split("/");
            if (urlPartLength === patternSplit.length) {
                isMatched = true;
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
                    matchedRoute.actionInfo = routeActionInfo;
                    matchedRoute.params = params;
                    matchedRoute.shields = route.shields;
                    return false;
                }
            }
            else {
                isMatched = false;
            }
            return true;
        });
        return isMatched ? matchedRoute : null;
    }
    return null;
}