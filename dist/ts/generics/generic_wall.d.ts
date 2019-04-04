import { Wall } from "../abstracts";
import { HttpResult } from "../types";
export declare class GenericWall extends Wall {
    onIncoming(): Promise<HttpResult>;
}
