import { Global } from "./global";
import { IRouteUrlDetail, IRouteInfo } from "./interfaces";
import { Util } from "./util";

export function getRouteFromPath(path: string): IRouteInfo {
    let controller = null;
    Global.routerCollection.every((value) => {
        if (value.path === path) {
            controller = value;
            return false;
        }
        return true;
    })
    return controller;
}

export function getRouteDetail(url: string): IRouteUrlDetail {
    const splittedValue = url.split('/');
    splittedValue.splice(0, 1);
    const defaultAction = "default";
    const defaultController = "Default";
    let detail: IRouteUrlDetail = {
        actionName: Util.isNullOrEmpty(splittedValue[1]) ?
            defaultAction : splittedValue[1],
        controllerName: Util.isNullOrEmpty(splittedValue[0]) ?
            defaultController : splittedValue[0]
    }
    return detail;
}