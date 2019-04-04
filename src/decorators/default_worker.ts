import { RouteHandler } from "../handlers";
import { HTTP_METHOD } from "../enums";
import { WorkerInfo } from "../types";

// tslint:disable-next-line
export const DefaultWorker = (allowedMethods?: HTTP_METHOD[]): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        const actionInfo: WorkerInfo = {
            workerName: methodName,
            methodsAllowed: allowedMethods == null ? [HTTP_METHOD.Get] : allowedMethods,
            guards: [],
            pattern: "/"
        };
        RouteHandler.addWorker(actionInfo, className);
    };
};
