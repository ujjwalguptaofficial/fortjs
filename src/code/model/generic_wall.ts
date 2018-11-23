import { Wall } from "../abstracts/wall";
import { HttpResult } from "../types";

export class GenericWall extends Wall {
    onIncoming(): Promise<HttpResult> {
        return null;
    }
}