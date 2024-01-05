import { ICacheOption } from "../interfaces";

/**
 * 
 *
 * @param {number} ttl - time to live in second.
 * @param {ICacheOption} option
 * @return {*}  {MethodDecorator}
 */
const cacheFor = (ttl: number, option: ICacheOption = {} as any): MethodDecorator => {
    return ((target: any, methodName: string) => {
        const className = (target.constructor.name as string);
        // RouteHandler.addGuards(value as Array<TGuard>, className, methodName);
    });
};

cacheFor(500);