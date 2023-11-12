import { Shield } from "../abstracts";
import { IHttpResult } from "../interfaces";
import { promiseResolve } from "../utils";

export class GenericShield extends Shield {
    constructor(...args) {
        super();
    }

    protect(...args): Promise<IHttpResult> {
        return promiseResolve(null);
    }
}