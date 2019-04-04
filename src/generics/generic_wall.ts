import { Wall } from "../abstracts";
import { HttpResult } from "../types";

export class GenericWall extends Wall {
    onIncoming(): Promise<HttpResult> {
        return null;
    }
}