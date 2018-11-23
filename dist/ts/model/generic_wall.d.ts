import { Wall } from "../abstracts/wall";
import { HttpResult } from "../types";
export declare class GenericWall extends Wall {
    onIncoming(): Promise<HttpResult>;
}
