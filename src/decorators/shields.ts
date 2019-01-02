import { Shield } from "../abstracts";
import { RouteHandler } from "../handlers/route_handler";
import { GenericShield } from "../models/generic_shield";

// tslint:disable-next-line
export const Shields = (shieldsValue: Array<typeof Shield>): ClassDecorator => {
    return (target: any) => {
        const className = target.name;
        RouteHandler.addShields(shieldsValue as Array<typeof GenericShield>, className);
    };
};