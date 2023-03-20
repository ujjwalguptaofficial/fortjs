import { Shield } from "../abstracts";
import { HttpResult } from "../types";
import { promiseResolve } from "../utils";

export class GenericShield extends Shield {
    constructor(...args) {
        super();
    }

    protect(...args): Promise<HttpResult> {
        return promiseResolve(null);
    }
}