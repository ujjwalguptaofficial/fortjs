import { Global } from "./global";
import { IRouteDetail } from "./interfaces";
import { Util } from "./util";

export function getController(controllerName) {
    let controller = null;
    Global.ControllerCollection.every((value) => {
        if (value.path === controllerName) {
            controller = value.controller;
            return false;
        }
        return true;
    })
    return controller;
}

export function getRouteDetail(url: string): IRouteDetail {
    const splittedValue = url.split('/');
    splittedValue.splice(0, 1);
    const defaultAction = "default";
    const defaultController = "Default";
    let detail: IRouteDetail = {
        actionName: Util.isNullOrEmpty(splittedValue[1]) ?
            defaultAction : splittedValue[1],
        controllerName: Util.isNullOrEmpty(splittedValue[0]) ?
            defaultController : splittedValue[0]
    }
    return detail;
}