import { HTTP_METHOD } from "../enums";
import { GenericGuard } from "../model/generic_guard";

export interface IRouteActionInfo {
    action: string;
    methodsAllowed: HTTP_METHOD[]
    guards: typeof GenericGuard[];
}
