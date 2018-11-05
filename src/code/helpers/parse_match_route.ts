import { RouteHandler } from "../route_handler";
import { IRouteMatch } from "../interfaces/route_match";

export function parseAndMatchRoute(url: string) {
    let isMatched: boolean = false;
    const urlLength = url.length;
    if (url[urlLength - 1] === "/") {
        url = url.substr(0, urlLength - 1);
    }
    const urlParts = url.split("/");
    let routeMatch: IRouteMatch = {} as IRouteMatch;
    const firstPart = urlParts[1];
    RouteHandler.routerCollection.every(route => {
        if (route.alias === firstPart) {
            const urlPartLength = urlParts.length;
            isMatched = true;
            routeMatch.controller = route.controller;
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
                        routeMatch.actionInfo = routeActionInfo;
                        routeMatch.params = params;
                        routeMatch.shields = route.shields;
                        return false;
                    }
                }
                else {
                    isMatched = false;
                }
                return true;
            });
            return false;
        }
        return true;
    });
    return isMatched ? routeMatch : null;
}