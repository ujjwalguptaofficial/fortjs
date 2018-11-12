import { Guard } from "../abstracts/guard";
export declare class GenericGuard extends Guard {
    check(): Promise<boolean>;
}
