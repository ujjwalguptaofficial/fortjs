import { HTTP_METHOD } from "../enums";
import { route } from "./route";
import { worker } from "./worker";

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
