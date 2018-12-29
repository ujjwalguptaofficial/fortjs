import { Guard } from "../abstracts/guard";
import { HttpResult } from "../types";
export declare class GenericGuard extends Guard {
    check(): Promise<HttpResult>;
}
