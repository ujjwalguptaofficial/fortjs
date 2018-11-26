import { FortWall } from "../abstracts/fort_wall";
import { HttpResult } from "../types";
export declare class GenericWall extends FortWall {
    onIncoming(): Promise<HttpResult>;
}
