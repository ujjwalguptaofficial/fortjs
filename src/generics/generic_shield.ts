import { Shield } from "../abstracts";
import { HttpResult } from "../types";

export class GenericShield extends Shield {
    constructor(...args) {
        super();
    }
    
    protect(...args): Promise<HttpResult> {
        return null;
    }
}