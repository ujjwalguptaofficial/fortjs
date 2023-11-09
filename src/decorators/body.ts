import { assign } from "./assign";
import { Controller } from "../abstracts";

const createBodyInjectParam = (type, prop) => {
    return {
        "__fortReqType__": type,
        inject: (controller: Controller) => {
            return controller[prop];
        }
    };
}

export const body = (): ParameterDecorator => {
    return (target: any, methodName: string, paramIndex: number) => {
        assign(createBodyInjectParam("body", "body"))(target, methodName, paramIndex);
    };
};

export const query = (): ParameterDecorator => {
    return (target: any, methodName: string, paramIndex: number) => {
        assign(createBodyInjectParam("query", "query"))(target, methodName, paramIndex);
    };
};

export function param(target: any, key: string, propertyIndex): void;
export function param(...args): ParameterDecorator;
export function param(...args) {
    const executor = (target: any, methodName: string, paramIndex: number) => {
        assign(createBodyInjectParam("param", "param"))(target, methodName, paramIndex);
    };
    // if (args.length === 3) {
    //     executor(args[0], args[1], args[2]);
    //     return;
    // }
    return executor;
}

