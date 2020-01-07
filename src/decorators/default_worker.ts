import { RouteHandler } from "../handlers";
import { HTTP_METHOD } from "../enums";
import { WorkerInfo } from "../types";
import { Route } from "./route";
import { Worker } from "./worker";

// tslint:disable-next-line
export const DefaultWorker = (allowedMethods?: HTTP_METHOD[]): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        const actionInfo: WorkerInfo = {
            workerName: methodName,
            methodsAllowed: allowedMethods == null ? [HTTP_METHOD.Get] : allowedMethods,
            guards: [],
            pattern: "/",
            values: []
        };
        // RouteHandler.addWorker(actionInfo, className);
        Worker(allowedMethods == null ? [HTTP_METHOD.Get] : allowedMethods)(target, methodName, descriptor);
        Route("/")(target, methodName, descriptor);
    };
};
