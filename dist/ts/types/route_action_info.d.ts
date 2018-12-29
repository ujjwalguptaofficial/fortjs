import { HTTP_METHOD } from "../enums";
import { GenericGuard } from "../models/generic_guard";
export declare type RouteActionInfo = {
    workerName: string;
    methodsAllowed: HTTP_METHOD[];
    guards: Array<typeof GenericGuard>;
    pattern: string;
};
