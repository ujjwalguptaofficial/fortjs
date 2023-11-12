import { Wall } from "../abstracts";
import { IHttpResult } from "../interfaces";

export class GenericWall extends Wall {
    constructor(...args) {
        super();
    }
    onIncoming(...args): Promise<IHttpResult> {
        return null;
    }
}