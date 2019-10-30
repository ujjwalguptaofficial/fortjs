import { InjectorHandler } from "../handlers";
import { __Constructor } from "../constant";

// tslint:disable-next-line
export const Singleton = (value): ParameterDecorator => {
    return (target: any, methodName: string, paramIndex: number) => {
        const className: string = target.name || target.constructor.name;
        if (methodName == null || methodName === 'constructor') {
            methodName = __Constructor;
        }
        InjectorHandler.addSingleton(className, methodName, paramIndex, value);
    };
};