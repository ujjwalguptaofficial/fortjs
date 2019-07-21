import { RouteHandler } from "../handlers";
import { removeLastSlash } from "../helpers";

// tslint:disable-next-line
export const Assign = (value): ParameterDecorator => {
    return (target: any, paramName: string, paramIndex: number) => {
        const className: string = target.name || target.constructor.name;
        if (paramName == null) {
            RouteHandler.addConstructorValue(className, paramIndex, value);
        }
        else {
            RouteHandler.addWorkerValue(className, paramName, paramIndex, value);
        }
    };
};