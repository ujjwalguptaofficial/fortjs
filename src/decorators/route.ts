import { RouteHandler } from "../route_handler";

export const route = (format: string): MethodDecorator => {
    return ((target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        RouteHandler.addPattern(format, className, methodName);
    });
};