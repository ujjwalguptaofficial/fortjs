import { InjectorHandler } from "../handlers";
import { __Constructor } from "../constant";

export const singleton = (value): ParameterDecorator => {
    return (target: any, methodName: string, paramIndex: number) => {
        const className: string = target.name || target.constructor.name;
        if (methodName == null || methodName === 'constructor') {
            methodName = __Constructor;
        }
        InjectorHandler.addSingleton(className, methodName, paramIndex, value);
    };
};