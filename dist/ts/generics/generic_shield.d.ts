import { Shield } from "../abstracts";
import { HttpResult } from "../types";
export declare class GenericShield extends Shield {
    constructor(...args: any[]);
    protect(...args: any[]): Promise<HttpResult>;
}
