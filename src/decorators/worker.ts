import { HTTP_METHOD } from "../enums";
import { RouteHandler } from "../handlers";
import { WorkerInfo } from "../types";

// tslint:disable-next-line
export const Worker = (allowedMethods?: HTTP_METHOD[]): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        const actionInfo: WorkerInfo = {
            workerName: methodName,
            methodsAllowed: allowedMethods == null ? [
                HTTP_METHOD.Delete, HTTP_METHOD.Get, HTTP_METHOD.Post, HTTP_METHOD.Patch, HTTP_METHOD.Put
            ] : allowedMethods,
            guards: [],
            pattern: `/${methodName.toLowerCase()}`,
            values: []
        };
        RouteHandler.addWorker(actionInfo, className);
    };
};
