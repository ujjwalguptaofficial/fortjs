import { RouteHandler } from "../handlers";
import { DATA_TYPE } from "../enums/data_type";
import { getClassName, removeMethodAndNullFromObject, getDataType } from "../helpers";

export function expectQuery(value: any): MethodDecorator {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className: string = getClassName(target);
        const type = getDataType(value);
        switch (type) {
            case DATA_TYPE.Function:
                const valueClassName = getClassName(value);
                if (valueClassName != null) {
                    value = new value();
                }
            case DATA_TYPE.Object:
                value = removeMethodAndNullFromObject(value);
                RouteHandler.addExpected("query", className, methodName, value); break;
            default:
                throw new Error(`expected query should be always an object but found ${type}`);
        }
    };
}