import { HTTP_METHOD } from "../enums";
import { RouteHandler } from "../route_handler";
import { IRouteActionInfo } from "../interfaces/route_action_info";

export function action(allowedMethods?: HTTP_METHOD[]): MethodDecorator {
    return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
        const className = (target.constructor.name as string);
        const actionInfo: IRouteActionInfo = {
            action: methodName,
            methodsAllowed: allowedMethods == null ? [
                HTTP_METHOD.Delete, HTTP_METHOD.Get, HTTP_METHOD.Post, HTTP_METHOD.Patch, HTTP_METHOD.Put
            ] : allowedMethods,
            guards: [],
            pattern: methodName.toLowerCase()
        };
        RouteHandler.addAction(actionInfo, className);
    }
}
