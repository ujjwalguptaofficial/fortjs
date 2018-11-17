import { RouteHandler } from "../route_handler";
import { GenericGuard } from "../model/generic_guard";
import { Guard } from "../abstracts/guard";

export function guards(value: typeof Guard[]): MethodDecorator {
    return (function (target: any, methodName: string, descriptor: PropertyDescriptor) {
        const className = (target.constructor.name as string);
        RouteHandler.addGuards(value as typeof GenericGuard[], className, methodName);
    })
}