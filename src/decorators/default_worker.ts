import { RouteHandler } from "../handlers/route_handler";
import { HTTP_METHOD } from "../enums/http_method";
import { WorkerInfo } from "../types/worker_info";

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
