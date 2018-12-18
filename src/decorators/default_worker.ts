import { RouteHandler } from "../handlers/route_handler";
import { HTTP_METHOD } from "../enums/http_method";
import { IRouteActionInfo } from "../interfaces/route_action_info";

export const defaultWorker = (allowedMethods?: HTTP_METHOD[]): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        const actionInfo: IRouteActionInfo = {
            workerName: methodName,
            methodsAllowed: allowedMethods == null ? [HTTP_METHOD.Get] : allowedMethods,
            guards: [],
            pattern: "/"
        };
        RouteHandler.addWorker(actionInfo, className);
    };
};
