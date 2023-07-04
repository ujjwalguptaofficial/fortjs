import { CONSTRUCTOR } from "../constant";

type InjectorStoreInfo = {
    className: string;
    methods: {
        [methodName: string]: any[]
    }
};
// this stores information of injector values that are available per class & worker
const injectorStoreInfos: InjectorStoreInfo[] = [];
// this stores injector values
const injectorValues: any[] = [];
// this stores the singletons name & their respective index in injector values
const singletons: {
    [className: string]: number
} = {};
export class InjectorHandler {

    static addWorkerValue(className: string, methodName: string, paramIndex, paramValue, shouldFindIndex = true): number {

        if (shouldFindIndex === true) {
            const paramValueIndex = injectorValues.indexOf(paramValue);
            if (paramValueIndex < 0) {
                paramValue = injectorValues.push(paramValue) - 1;
            }
            else {
                paramValue = paramValueIndex;
            }
        }
        

        const savedValue = injectorStoreInfos.find(x => x.className === className);
        const value: InjectorStoreInfo = {
            className: className,
            methods: {
                [methodName]: []
            }
        };
        if (savedValue == null) {
            value.methods[methodName][paramIndex] = paramValue;
            injectorStoreInfos.push(value);
        }
        else {
            // const savedMethod = savedValue.methods[methodName];
            if (savedValue.methods[methodName] == null) {
                savedValue.methods[methodName] = [];
            }
            savedValue.methods[methodName][paramIndex] = paramValue;
        }

        return paramValue;
    }

    static getConstructorValues(className: string) {
        return this.getMethodValues(className, CONSTRUCTOR);
    }

    static getMethodValues(className: string, methodName: string) {
        const savedValue = injectorStoreInfos.find(qry => qry.className === className);
        if (savedValue != null) {
            const methodArgs = savedValue.methods[methodName];
            if (methodArgs != null) {
                return methodArgs.map(injectorValueIndex => {
                    return injectorValues[injectorValueIndex];
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