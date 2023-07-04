import { RouteHandler } from "../handlers";
import { removeLastSlash } from "../helpers";

export const route = (format: string): MethodDecorator => {
    return ((target: any, methodName: string) => {
        const className = (target.constructor.name as string);
        // remove / from route
        if (format != null) {
            format = removeLastSlash(format);
        }
        RouteHandler.addPattern(format, className, methodName);
    });
};