import { RouteHandler } from "../handlers";
import { removeLastSlash } from "../helpers";

// tslint:disable-next-line
export const Assign = (value): ParameterDecorator => {
    return (target: any, propertyName: string, propertyIndex: number) => {
        const className: string = target.name || target.constructor.name;
        console.log("value", value, "className", className, "property", propertyName, "index", propertyIndex);
        if (propertyName == null) {
            RouteHandler.addConstructorValue(className, propertyIndex, value);
        }
    };
};