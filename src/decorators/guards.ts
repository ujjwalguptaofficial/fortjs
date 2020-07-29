import { RouteHandler } from "../handlers";
import { GenericGuard } from "../generics";
import { Guard } from "../abstracts/guard";

// tslint:disable-next-line
export const Guards = (...value: Array<typeof Guard>): MethodDecorator => {
    return ((target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        RouteHandler.addGuards(value as Array<typeof GenericGuard>, className, methodName);
    });
};