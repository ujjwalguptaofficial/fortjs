import { HTTP_METHOD } from "../enums";
import { GenericGuard } from "../generics";

export type IWorkerInfo = {
    workerName: string;
    methodsAllowed: HTTP_METHOD[];
    guards: Array<typeof GenericGuard>;
    pattern: string;
    values: any[];
    expectedQuery?: any;
    expectedBody?: any;
};
