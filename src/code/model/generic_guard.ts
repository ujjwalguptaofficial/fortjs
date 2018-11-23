import { Guard } from "../abstracts/guard";
import { HttpResult } from "../types";

export class GenericGuard extends Guard {

    check(): Promise<HttpResult> {
        return null;
    }
}