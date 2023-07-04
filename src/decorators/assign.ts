import { InjectorHandler } from "../handlers";
import { CONSTRUCTOR } from "../constants";

export const assign = (value): ParameterDecorator => {
    return (target: any, methodName: string, paramIndex: number) => {
        const className: string = target.name || target.constructor.name;
        if (methodName == null) {
            methodName = CONSTRUCTOR;
        }
        InjectorHandler.addWorkerValue(className, methodName, paramIndex, value);
    };
};