import { HTTP_METHOD } from "../enums";
import { IRouteActionInfo } from "../interfaces";
import { RouteHandler } from "../route_handler";

export function action(allowedMethods?: HTTP_METHOD[]): MethodDecorator {
    return function (target: any, methodName: string | symbol, descriptor: PropertyDescriptor) {
        const className = (target.constructor.name as string);
        const actionInfo = {
            action: methodName,
            methodsAllowed: allowedMethods
        } as IRouteActionInfo
        RouteHandler.addAction(actionInfo, className);
    }
}
