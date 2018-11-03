import { Guard } from "../abstracts";
import { RouteHandler } from "../route_handler";

export function guard(guards: Guard[]): ClassDecorator {
    return (target: any) => {
        const className = target.name;
        RouteHandler.addGuards(guards, className);
    };
}