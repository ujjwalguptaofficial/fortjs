import { Wall } from "../abstracts";
import { IHttpResult } from "../interfaces";

export class CacheWall extends Wall {
    async onIncoming(...args: any[]): Promise<void | IHttpResult> {

    }

    onOutgoing(finalResult: IHttpResult, ...args: any[]): void {
        // get cache condition from routes
        // and check if condition exist

        // then cache result
    }
}