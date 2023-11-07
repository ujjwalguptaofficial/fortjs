import { CONSTRUCTOR } from "../constants";

type InjectorStoreInfo = Map<string, any[]>;

// this stores information of injector values that are available per class & worker
// const injectorStoreInfos: InjectorStoreInfo[] = [];
const injectorStoreInfos: Map<string, InjectorStoreInfo> = new Map();
// this stores injector values
const injectorValues: any[] = [];
// this stores the singletons name & their respective index in injector values
const singletons: Map<string, number> = new Map();

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


        const savedValue = injectorStoreInfos.get(className);
        // const value: InjectorStoreInfo = new Map
        // {
        //     methods: {
        //         [methodName]: []
        //     }
        // };
        if (savedValue == null) {
            const methods = [];
            methods[paramIndex] = paramValue;

            const value = new Map();
            value.set(methodName, methods);

            injectorStoreInfos.set(className, value);
        }
        else {
            let savedMethod = savedValue.get(methodName);
            if (savedMethod == null) {
                savedMethod = [];
                savedValue.set(methodName, savedMethod);
            }
            savedMethod[paramIndex] = paramValue;
        }

        return paramValue;
    }

    static getConstructorValues(className: string) {
        return this.getMethodValues(className, CONSTRUCTOR);
    }

    static getMethodValues(className: string, methodName: string) {
        const savedValue = injectorStoreInfos.get(className);
        if (savedValue != null) {
            const methodArgs = savedValue.get(methodName);
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
            const singletonValueStored = singletons.get(singletonClassName);
            if (singletonValueStored == null) {
                singletons.set(singletonClassName,
                    InjectorHandler.addWorkerValue(className, methodName, paramIndex, new paramValue())
                );
            }
            else {
                InjectorHandler.addWorkerValue(className, methodName, paramIndex, singletonValueStored, false);
            }
        }
    }
}