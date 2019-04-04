import { HTTP_METHOD } from "../enums";
import { GenericGuard } from "../generics";

export type WorkerInfo = {
    workerName: string;
    methodsAllowed: HTTP_METHOD[];
    guards: Array<typeof GenericGuard>;
    pattern: string;
};
