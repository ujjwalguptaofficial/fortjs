import { RouteHandler } from "../handlers";

// tslint:disable-next-line
export const Route = (format: string): MethodDecorator => {
    return ((target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        // remove / from route
        if (format != null && format !== '/' && format[format.length - 1] === '/') {
            format = format.substr(0, format.length - 1);
        }
        RouteHandler.addWorkerRoute(format, className, methodName);
    });
};