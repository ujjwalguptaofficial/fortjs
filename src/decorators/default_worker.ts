import { RouteHandler } from "../handlers";
import { HTTP_METHOD } from "../enums";
import { WorkerInfo } from "../types";
import { route } from "./route";
import { worker } from "./worker";

// tslint:disable-next-line
export const defaultWorker = (...allowedMethods: HTTP_METHOD[]): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        if (allowedMethods.length === 0) {
            worker(HTTP_METHOD.Get)(
                target, methodName, descriptor
            );
        }
        else {
            worker(...allowedMethods)(
                target, methodName, descriptor
            );
        }
        route("/")(target, methodName, descriptor);
    };
};
