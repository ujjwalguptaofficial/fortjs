import { RouteHandler } from "../route_handler";
import { GenericGuard } from "../model/generic_guard";
import { Guard } from "../abstracts/guard";

export const guards = (value: Array<typeof Guard>): MethodDecorator => {
    return ((target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        RouteHandler.addGuards(value as Array<typeof GenericGuard>, className, methodName);
    });
};