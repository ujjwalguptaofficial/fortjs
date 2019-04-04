import { Shield } from "../abstracts";
import { RouteHandler } from "../handlers";
import { GenericShield } from "../generics";
 
// tslint:disable-next-line
export const Shields = (shieldsValue: Array<typeof Shield>): ClassDecorator => {
    return (target: any) => {
        const className = target.name;
        RouteHandler.addShields(shieldsValue as Array<typeof GenericShield>, className);
    };
};