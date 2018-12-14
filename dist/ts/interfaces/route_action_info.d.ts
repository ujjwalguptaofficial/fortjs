import { HTTP_METHOD } from "../enums";
import { GenericGuard } from "../model/generic_guard";
export interface IRouteActionInfo {
    workerName: string;
    methodsAllowed: HTTP_METHOD[];
    guards: Array<typeof GenericGuard>;
    pattern: string;
}
