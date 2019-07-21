import { InjectorHandler } from "../handlers";

 

// tslint:disable-next-line
export const Assign = (value): ParameterDecorator => {
    return (target: any, paramName: string, paramIndex: number) => {
        const className: string = target.name || target.constructor.name;
        if (paramName == null) {
            InjectorHandler.addConstructorValue(className, paramIndex, value);
        }
        else {
            InjectorHandler.addWorkerValue(className, paramName, paramIndex, value);
        }
    };
};