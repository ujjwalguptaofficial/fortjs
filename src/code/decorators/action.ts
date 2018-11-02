import { HTTP_METHOD } from "../enums";
import { IRouteActionInfo, IRouteInfo } from "../interfaces";
import { Global } from "../global";

export function action(allowedMethods?: HTTP_METHOD[]): MethodDecorator {
    return function (target: any, methodName: string | symbol, descriptor: PropertyDescriptor) {
        const className = (target.constructor.name as string);
        const actionInfo = {
            action: methodName,
            methodsAllowed: allowedMethods == null ? [] : allowedMethods
        } as IRouteActionInfo
        addActionIntoController(className, actionInfo);
    }
}

function addActionIntoController(controllerName: string, actionInfo: IRouteActionInfo) {
    const index = Global.routerCollection.findIndex(x => x.controllerName === controllerName);
    console.log("---------addActionIntoController--------------");
    console.log(Global.routerCollection);
    console.log(controllerName);
    if (index >= 0) {
        Global.routerCollection[index].actions.push(actionInfo);
    }
    else {
        Global.addToRouterCollection({
            actions: [actionInfo],
            controller: null,
            controllerName: controllerName,
            path: null
        } as IRouteInfo)
    }
    console.log(Global.routerCollection);
}