import { RouteHandler } from "../route_handler";

export function route(format: string): MethodDecorator {
    return (function (target: any, methodName: string, descriptor: PropertyDescriptor) {
        const className = (target.constructor.name as string);
        RouteHandler.addPattern(format,className,methodName);
    })
}