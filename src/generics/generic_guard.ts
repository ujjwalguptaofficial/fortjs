import { Guard } from "../abstracts";
import { HttpResult } from "../types";

export class GenericGuard extends Guard {

    constructor(...args) {
        super();
    }

    check(...args): Promise<HttpResult> {
        return null;
    }
}