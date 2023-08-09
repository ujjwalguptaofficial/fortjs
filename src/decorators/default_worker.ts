import { HTTP_METHOD } from "../enums";
import { route } from "./route";
import { worker } from "./worker";

export const defaultWorker = (...allowedMethods: HTTP_METHOD[]): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        worker(...allowedMethods.length === 0 ? [HTTP_METHOD.Get] : allowedMethods)(
            target, methodName, descriptor
        );
        route("/")(target, methodName, descriptor);
    };
};
