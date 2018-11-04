import { RouteHandler } from "../route_handler";
import { GenericGuard } from "../model/generic_guard";
import { Guard } from "../abstracts/guard";

export function guards(guards: typeof Guard[]): MethodDecorator {
    return (function (target: any, methodName: string, descriptor: PropertyDescriptor) {
        const className = target.name;
        RouteHandler.addGuards(guards as typeof GenericGuard[], className, methodName);
    })
}