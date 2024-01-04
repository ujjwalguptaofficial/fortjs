import { RouteHandler } from "../handlers";
import { TGuard } from "../types";

interface ICacheOption {
    key?: string
}
/**
 * 
 *
 * @param {number} ttl - time to live in second.
 * @param {ICacheOption} option
 * @return {*}  {MethodDecorator}
 */
const cacheFor = (ttl: number, option?: ICacheOption): MethodDecorator => {
    return ((target: any, methodName: string) => {
        const className = (target.constructor.name as string);
        // RouteHandler.addGuards(value as Array<TGuard>, className, methodName);
    });
};

cacheFor(500);