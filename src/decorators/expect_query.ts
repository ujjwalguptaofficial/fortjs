import { RouteHandler } from "../handlers";

export function ExpectQuery(value: any): MethodDecorator {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className: string = target.name || target.constructor.name;
        RouteHandler.addExpected("query", className, methodName, value);
    };
}