type InjectorValue = {
    className: string;
    constructorValues: any[],
    methods: {
        [name: string]: any[]
    }
};
export const injectorValues: InjectorValue[] = [];
export class InjectorHandler {
    static addConstructorValue(className: string, paramIndex, paramValue) {
        const index = injectorValues.findIndex(x => x.className === className);
        if (index < 0) {
            injectorValues.push({
                className: className,
                constructorValues: [paramValue],
                methods: {}
            });
        }
        else {
            injectorValues[index].constructorValues.splice(paramIndex, 0, paramValue);
        }
    }

    static addWorkerValue(className: string, paramName: string, paramIndex, paramValue) {
        const savedValue = injectorValues.find(x => x.className === className);
        const value: InjectorValue = {
            className: className,
            constructorValues: [],
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
        const savedValue = injectorValues.find(qry => qry.className === className);
        return savedValue == null ? [] : savedValue.constructorValues;

    }

    static getMethodValues(className: string, methodName: string) {
        const savedValue = injectorValues.find(qry => qry.className === className);
        if (savedValue != null) {
            const valueForMethod = injectorValues.find(qry => qry.className === className).methods[methodName];
            if (valueForMethod != null) {
                return valueForMethod;
            }
        }
        return [];
    }
}