import { Wall } from "../abstracts";
import { FORT_GLOBAL } from "../constants";
import { IHttpResult } from "../interfaces";
import { CacheManager } from "../utils/cache_manager";

export class CacheWall extends Wall {
    async onIncoming(): Promise<void | IHttpResult> {
        const cacheManager = new CacheManager(
            new FORT_GLOBAL.cacheStore()
        );
        const componentProps = this['componentProp_'];
        componentProps.cache = cacheManager;
    }

    onOutgoing(finalResult: IHttpResult, ...args: any[]): void {
        // get cache condition from routes
        // and check if condition exist

        // then cache result
    }
}