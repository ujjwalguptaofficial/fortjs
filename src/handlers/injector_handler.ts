import { CONSTRUCTOR } from "../constants";

type InjectorStoreInfo = Map<string, any[]>;

// this stores information of injector values that are available per class & worker
// const injectorStoreInfos: InjectorStoreInfo[] = [];
const injectorStoreInfos: Map<string, InjectorStoreInfo> = new Map();
// this stores injector values
const injectorValues: any[] = [];
// this stores the singletons name & their respective index in injector values
const singletons: Map<string, number> = new Map();

const getStoredValueIndex = (value) => {
    const paramValueIndex = injectorValues.indexOf(value);
    const storedValueIndex = paramValueIndex < 0 ? injectorValues.push(value) - 1 : paramValueIndex;
    return storedValueIndex;
}

export class InjectorHandler {

    static addWorkerValue(className: string, methodName: string, paramIndex, paramValue: number): number {
        const savedValue = injectorStoreInfos.get(className);
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
        return this.getMethodValues(className, CONSTRUCTOR, null);
    }

    static getMethodValues(className: string, methodName: string, component) {
        const savedValue = injectorStoreInfos.get(className);
        if (savedValue != null) {
            const methodArgs = savedValue.get(methodName);
            if (methodArgs != null) {
                return methodArgs.map(injectorValueIndex => {
                    const value = injectorValues[injectorValueIndex];
                    switch (value['__fortReqType__']) {
                        case "body":
                        case "query":
                        case "param":
                            return value.inject(component);
                    }
                    return value;
                });
            }
        }
        return [];
    }

    static addSingleton(className: string, methodName: string, paramIndex, paramValue) {
        const singletonClassName = paramValue.name;
        if (singletonClassName) {
            let singletonValueStoredIndex = singletons.get(singletonClassName);
            if (singletonValueStoredIndex == null) {
                singletonValueStoredIndex = InjectorHandler.addSingletonValue(paramValue);
            }
            InjectorHandler.addWorkerValue(className, methodName, paramIndex, singletonValueStoredIndex);
        }
    }

    static addAssignValue(className: string, methodName: string, paramIndex, paramValue) {
        const assignValueStoredIndex = getStoredValueIndex(paramValue);
        InjectorHandler.addWorkerValue(className, methodName, paramIndex, assignValueStoredIndex);
    }

    static getSingletonValue(classValue: any) {
        const className: string = classValue.name || classValue.constructor.name;
        let singletonValueStoredIndex = singletons.get(className);
        if (singletonValueStoredIndex) {
            return injectorValues[singletonValueStoredIndex];
        }
        singletonValueStoredIndex = InjectorHandler.addSingletonValue(classValue);
        return injectorValues[singletonValueStoredIndex];
    }

    static addSingletonValue(classValue: any) {
        const instance = new classValue();
        const storedValueIndex = getStoredValueIndex(instance);
        const className: string = classValue.name || classValue.constructor.name;
        singletons.set(className, storedValueIndex);
        return storedValueIndex;
    }
}
