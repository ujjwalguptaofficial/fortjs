import { Guard } from "infinity";

export class JsonGuard extends Guard {
    check(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const value = this.query['please'];
            console.log("please value", value);
            resolve(value != null);
        })
    }
}