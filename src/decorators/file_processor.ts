import { RouteHandler } from "../handlers";
import { TFileProcessor } from "../types";

/**
 * file decorator is used to add file processor to the route handler
 * the file processor contains logic to process the file validation and upload
 *
 * @param {TFileProcessor} value
 * @return {*}  {MethodDecorator}
 */
export const file = (value: TFileProcessor): MethodDecorator => {
    return ((target: any, methodName: string) => {
        const className = (target.constructor.name as string);
        RouteHandler.addFileProcessor(value, className, methodName);
    });
};
