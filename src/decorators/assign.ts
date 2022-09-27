import { InjectorHandler } from "../handlers";
import { __Constructor } from "../constant";

// tslint:disable-next-line
export const assign = (value): ParameterDecorator => {
    return (target: any, methodName: string, paramIndex: number) => {
        const className: string = target.name || target.constructor.name;
        if (methodName == null) {
            methodName = __Constructor;
        }
        InjectorHandler.addWorkerValue(className, methodName, paramIndex, value);
    };
};