import { RouteHandler } from "../handlers";
import { HTTP_METHOD } from "../enums";
import { WorkerInfo } from "../types";
import { Route } from "./route";
import { Worker } from "./worker";

// tslint:disable-next-line
export const DefaultWorker = (...allowedMethods: HTTP_METHOD[]): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        if (allowedMethods.length === 0) {
            Worker(HTTP_METHOD.Get)(
                target, methodName, descriptor
            );
        }
        else {
            Worker(...allowedMethods)(
                target, methodName, descriptor
            );
        }
        Route("/")(target, methodName, descriptor);
    };
};
