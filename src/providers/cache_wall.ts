import { Wall } from "../abstracts";
import { FORT_GLOBAL } from "../constants";
import { IHttpResult } from "../interfaces";
import { CacheManager } from "../utils/cache_manager";

export class CacheWall extends Wall {
    async onIncoming(): Promise<void | IHttpResult> {
        this['componentProp_'].cache = FORT_GLOBAL.cacheManager;
    }

    onOutgoing(finalResult: IHttpResult, ...args: any[]): void {
        // get cache condition from routes
        // and check if condition exist

        // then cache result
    }
}