import { FortWall } from "../abstracts/fort_wall";
import { HttpResult } from "../types";

export class GenericWall extends FortWall {
    onIncoming(): Promise<HttpResult> {
        return null;
    }
}