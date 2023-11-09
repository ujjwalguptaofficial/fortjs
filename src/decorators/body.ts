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

export function asBody(target: any, propertyKey: string | symbol, parameterIndex: number) {
    assign(createBodyInjectParam("body", "body"))(target, propertyKey, parameterIndex);
}

export function asQuery(target: any, methodName: string, paramIndex: number) {
    assign(createBodyInjectParam("query", "query"))(target, methodName, paramIndex);
}

export function asParam(target: any, methodName: string, paramIndex: number) {
    assign(createBodyInjectParam("param", "param"))(target, methodName, paramIndex);
}

