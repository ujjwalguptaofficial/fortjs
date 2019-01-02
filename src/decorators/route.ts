import { RouteHandler } from "../handlers/route_handler";

// tslint:disable-next-line
export const Route = (format: string): MethodDecorator => {
    return ((target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        RouteHandler.addPattern(format, className, methodName);
    });
};