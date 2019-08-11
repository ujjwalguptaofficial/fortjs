import { __Constructor } from "../constant";

type InjectorValue = {
    className: string;
    methods: {
        [methodName: string]: any[]
    }
};
const injectorValues: InjectorValue[] = [];
const injectorValuesStore: any[] = [];
const singletons: {
    [className: string]: number
} = {};
export class InjectorHandler {

    static addWorkerValue(className: string, methodName: string, paramIndex, paramValue, shouldFindIndex = true): number {
        if (shouldFindIndex === true && injectorValuesStore.indexOf(paramValue) < 0) {
            paramValue = injectorValuesStore.push(paramValue) - 1;
        }

        const savedValue = injectorValues.find(x => x.className === className);
        const value: InjectorValue = {
            className: className,
            methods: {
                [methodName]: [paramValue]
            }
        };
        if (savedValue == null) {
            injectorValues.push(value);
        }
        else {
            const savedMethod = savedValue.methods[methodName];
            if (savedMethod == null) {
                savedValue.methods[methodName] = [paramValue];
            }
            else {
                savedValue.methods[methodName].splice(paramIndex, 0, paramValue);
            }
        }
        return paramValue;
    }

    static getConstructorValues(className: string) {
        return this.getMethodValues(className, __Constructor);
    }

    static getMethodValues(className: string, methodName: string) {
        const savedValue = injectorValues.find(qry => qry.className === className);
        if (savedValue != null) {
            const methodArgs = savedValue.methods[methodName];
            if (methodArgs != null) {
                return methodArgs.map(val => {
                    return injectorValuesStore[val];
                });
            }
        }
        return [];
    }

    static addSingleton(className: string, methodName: string, paramIndex, paramValue) {
        const singletonClassName = paramValue.name;
        if (singletonClassName) {
            if (singletons[singletonClassName] == null) {
                singletons[singletonClassName] = InjectorHandler.addWorkerValue(className, methodName, paramIndex, new paramValue());
            }
            else {
                InjectorHandler.addWorkerValue(className, methodName, paramIndex, singletons[singletonClassName], false);
            }
        }
    }
}