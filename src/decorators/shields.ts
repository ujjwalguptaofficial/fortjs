import { Shield } from "../abstracts";
import { RouteHandler } from "../route_handler";
import { GenericShield } from "../model/generic_shield";

export const shields = (shieldsValue: Array<typeof Shield>): ClassDecorator => {
    return (target: any) => {
        const className = target.name;
        RouteHandler.addShields(shieldsValue as Array<typeof GenericShield>, className);
    };
};