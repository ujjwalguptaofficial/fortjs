declare type InjectorValue = {
    className: string;
    constructorValues: any[];
    methods: {
        [name: string]: any[];
    };
};
export declare const injectorValues: InjectorValue[];
export declare class InjectorHandler {
    static addConstructorValue(className: string, paramIndex: any, paramValue: any): void;
    static addWorkerValue(className: string, paramName: string, paramIndex: any, paramValue: any): void;
    static getConstructorValues(className: string): any[];
    static getMethodValues(className: string, methodName: string): any[];
}
export {};
