import { RouteHandler } from "../handlers";
import { TGuard } from "../types";

export const guards = (...value: Array<TGuard>): MethodDecorator => {
    return ((target: any, methodName: string) => {
        const className = (target.constructor.name as string);
        RouteHandler.addGuards(value as Array<TGuard>, className, methodName);
    });
};