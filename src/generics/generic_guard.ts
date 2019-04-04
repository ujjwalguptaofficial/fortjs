import { Guard } from "../abstracts";
import { HttpResult } from "../types";

export class GenericGuard extends Guard {

    check(): Promise<HttpResult> {
        return null;
    }
}