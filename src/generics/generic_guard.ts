import { Guard } from "../abstracts";
import { IHttpResult } from "../interfaces";

export class GenericGuard extends Guard {

    constructor(...args) {
        super();
    }

    check(...args): Promise<IHttpResult> {
        return null;
    }
}