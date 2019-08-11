export declare class InjectorHandler {
    static addWorkerValue(className: string, methodName: string, paramIndex: any, paramValue: any, shouldFindIndex?: boolean): number;
    static getConstructorValues(className: string): any[];
    static getMethodValues(className: string, methodName: string): any[];
    static addSingleton(className: string, methodName: string, paramIndex: any, paramValue: any): void;
}
