import { Guard } from "../abstracts";
import { HttpResult } from "../types";
export declare class GenericGuard extends Guard {
    constructor(...args: any[]);
    check(...args: any[]): Promise<HttpResult>;
}
