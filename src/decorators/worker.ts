import { HTTP_METHOD } from "../enums";
import { RouteHandler } from "../handlers";
import { IWorkerInfo } from "../interfaces";
import { wrapMethodDecorator } from "./wrap_method_decorator";

export function worker(allowedMethods1?: HTTP_METHOD, allowedMethods2?: HTTP_METHOD, allowedMethods3?: HTTP_METHOD): MethodDecorator;
export function worker(target, key: string): void;
export function worker(...args) {
    return wrapMethodDecorator(args, createWorker);
}

const allHttpMethod = Object.seal([
    HTTP_METHOD.Delete,
    HTTP_METHOD.Get,
    HTTP_METHOD.Post,
    HTTP_METHOD.Patch,
    HTTP_METHOD.Put,
    HTTP_METHOD.Head,
]);

function createWorker(target: any, methodName: string, ...allowedMethods: HTTP_METHOD[]) {
    const className = (target.constructor.name as string);
    if (allowedMethods.includes(HTTP_METHOD.Get)) {
        allowedMethods.push(HTTP_METHOD.Head);
    }
    const actionInfo: IWorkerInfo = {
        workerName: methodName,
        methodsAllowed: allowedMethods.length === 0 ? allHttpMethod : allowedMethods,
        guards: [],
        pattern: `/${methodName.toLowerCase()}`,
        values: []
    };
    RouteHandler.addWorker(actionInfo, className);
}
