import { Guard } from "../abstracts";
import { HttpResult } from "../types";
export declare class GenericGuard extends Guard {
    check(): Promise<HttpResult>;
}
