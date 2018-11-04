import { Shield } from "../abstracts";
import { RouteHandler } from "../route_handler";
import { GenericShield } from "../model/generic_shield";

export function shields(shields: typeof Shield[]): ClassDecorator {
    return (target: any) => {
        const className = target.name;
        RouteHandler.addShields(shields as typeof GenericShield[], className);
    };
}