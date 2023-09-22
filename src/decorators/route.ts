import { RouteHandler } from "../handlers";
import { removeLastSlash } from "../helpers";
import { controllerSectionMap } from "./controller";

export const route = (format: string): MethodDecorator => {
    return ((target: any, methodName: string) => {
        let className = (target.constructor.name as string);
        const controllerSectionValue = controllerSectionMap.get(className)
        className = controllerSectionValue || className;
        // remove / from route
        if (format != null) {
            format = removeLastSlash(format);
        }
        RouteHandler.addPattern(format, className, methodName);
    });
};