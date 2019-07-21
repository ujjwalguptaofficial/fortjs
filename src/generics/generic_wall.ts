import { Wall } from "../abstracts";
import { HttpResult } from "../types";

export class GenericWall extends Wall {
    constructor(...args) {
        super();
    }
    onIncoming(...args): Promise<HttpResult> {
        return null;
    }
}