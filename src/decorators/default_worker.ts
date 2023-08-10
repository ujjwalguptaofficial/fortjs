import { HTTP_METHOD } from "../enums";
import { route } from "./route";
import { worker } from "./worker";
import { wrapMethodDecorator } from "./wrap_method_decorator";

// tslint:disable-next-line
export function defaultWorker(target, key: string): void;
export function defaultWorker(...allowedMethods: HTTP_METHOD[]): MethodDecorator;
export function defaultWorker(...args) {
    return wrapMethodDecorator(args, createWorker);
}

function createWorker(target: any, methodName: string, ...allowedMethods: HTTP_METHOD[]) {
    const args = (allowedMethods.length === 0 ? [HTTP_METHOD.Get] : allowedMethods);
    (worker as any)(...args)(
        target, methodName, null as any
    );
    route("/")(target, methodName, null as any);
}
