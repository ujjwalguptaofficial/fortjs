import { RouteHandler } from "../handlers";
import { TFileProcessor } from "../types";

export const fileProcessor = (value: TFileProcessor): MethodDecorator => {
    return ((target: any, methodName: string) => {
        const className = (target.constructor.name as string);
        RouteHandler.addFileProcessor(value, className, methodName);
    });
};
