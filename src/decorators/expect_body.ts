import { RouteHandler } from "../handlers";

export function ExpectBody(value: any): MethodDecorator {
    return (target: any, methodName: string,  descriptor: PropertyDescriptor) => {
        const className: string = target.name || target.constructor.name;
        RouteHandler.addExpected("body", className, methodName, value);
    };
}