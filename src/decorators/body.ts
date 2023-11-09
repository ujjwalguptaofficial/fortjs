import { assign } from "./assign";
import { Controller } from "../abstracts";

export const body = (): ParameterDecorator => {
    return (target: any, methodName: string, paramIndex: number) => {
        assign((controller: Controller) => {
            return controller.body;
        })(target, methodName, paramIndex);
    };
};

export const query = (): ParameterDecorator => {
    return (target: any, methodName: string, paramIndex: number) => {
        assign((controller: Controller) => {
            return controller.query;
        })(target, methodName, paramIndex);
    };
};

export const param = (): ParameterDecorator => {
    return (target: any, methodName: string, paramIndex: number) => {
        assign((controller: Controller) => {
            return controller.param;
        })(target, methodName, paramIndex);
    };
};

