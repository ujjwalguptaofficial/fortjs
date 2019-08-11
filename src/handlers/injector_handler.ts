import { __Constructor } from "../constant";

type InjectorValue = {
    className: string;
    methods: {
        [methodName: string]: any[]
    }
};
export const injectorValues: InjectorValue[] = [];

export const injectorValuesStore: any[] = [];
export class InjectorHandler {
    // static addConstructorValue(className: string, paramIndex, paramValue) {
    //     let indexOfValue = injectorValuesStore.indexOf(paramValue);
    //     if (indexOfValue < 0) {
    //         indexOfValue = injectorValuesStore.push(paramValue) - 1;
    //     }

    //     const index = injectorValues.findIndex(x => x.className === className);
    //     if (index < 0) {
    //         injectorValues.push({
    //             className: className,
    //             constructorValues: [indexOfValue],
    //             methods: {}
    //         });
    //     }
    //     else {
    //         injectorValues[index].constructorValues.splice(paramIndex, 0, indexOfValue);
    //     }
    // }

    static addWorkerValue(className: string, paramName: string, paramIndex, paramValue) {
        if (injectorValuesStore.indexOf(paramValue) < 0) {
            paramValue = injectorValuesStore.push(paramValue) - 1;
        }

        const savedValue = injectorValues.find(x => x.className === className);
        const value: InjectorValue = {
            className: className,
            // constructorValues: [],
            methods: {
                [paramName]: [paramValue]
            }
        };
        if (savedValue == null) {
            injectorValues.push(value);
        }
        else {
            const savedMethod = savedValue.methods[paramName];
            if (savedMethod == null) {
                savedValue.methods[paramName] = [paramValue];
            }
            else {
                savedValue.methods[paramName].splice(paramIndex, 0, paramValue);
            }
        }
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
}