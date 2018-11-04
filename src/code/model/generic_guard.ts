import { Guard } from "../abstracts/guard";

export class GenericGuard extends Guard {

    check(): Promise<boolean> {
        return null;
    }
}