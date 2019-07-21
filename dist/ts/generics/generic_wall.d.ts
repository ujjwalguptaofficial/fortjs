import { Wall } from "../abstracts";
import { HttpResult } from "../types";
export declare class GenericWall extends Wall {
    constructor(...args: any[]);
    onIncoming(...args: any[]): Promise<HttpResult>;
}
