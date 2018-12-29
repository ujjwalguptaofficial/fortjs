import { Shield } from "../abstracts";
import { RouteHandler } from "../handlers/route_handler";
import { GenericShield } from "../models/generic_shield";

export const shields = (shieldsValue: Array<typeof Shield>): ClassDecorator => {
    return (target: any) => {
        const className = target.name;
        RouteHandler.addShields(shieldsValue as Array<typeof GenericShield>, className);
    };
};