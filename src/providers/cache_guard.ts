import { Guard } from "../abstracts";
import { IHttpResult } from "../interfaces";

export class CacheGuard extends Guard {
    async check(...args: any[]): Promise<void | IHttpResult> {
        // get cache condition from routes
        // and check if condition exist

        // then return cache result
    }
}