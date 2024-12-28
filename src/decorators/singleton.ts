import { InjectorHandler } from "../handlers";
import { CONSTRUCTOR } from "../constants";

export const singleton = (value): ParameterDecorator => {
    return (target: any, methodName: string, paramIndex: number) => {
        const className: string = target.name || target.constructor.name;
        if (methodName == null || methodName === 'constructor') {
            methodName = CONSTRUCTOR;
        }
        InjectorHandler.addSingleton(className, methodName, paramIndex, value);
    };
};
