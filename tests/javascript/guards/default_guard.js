import { Guard } from "fortjs";

export class DefaultGuard extends Guard {
    async check() {
        return null;
    }
}