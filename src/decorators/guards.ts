import { RouteHandler } from "../handlers";
import { GenericGuard } from "../generics";
import { Guard } from "../abstracts";

// tslint:disable-next-line
export const guards = (...value: Array<typeof Guard>): MethodDecorator => {
    return ((target: any, methodName: string) => {
        const className = (target.constructor.name as string);
        RouteHandler.addGuards(value as Array<typeof GenericGuard>, className, methodName);
    });
};