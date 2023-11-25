import { HTTP_METHOD } from "../enums";
import { TGuard } from "../types";

export type IWorkerInfo = {
    workerName: string;
    methodsAllowed: HTTP_METHOD[];
    guards: Array<TGuard>;
    pattern: string;
    values: any[];
    expectedQuery?: any;
    expectedBody?: any;
};
