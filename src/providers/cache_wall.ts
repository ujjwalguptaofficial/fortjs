import { Wall } from "../abstracts";
import { FORT_GLOBAL } from "../constants";
import { IHttpResult } from "../interfaces";

export class CacheWall extends Wall {
    async onIncoming(): Promise<void | IHttpResult> {
        this['componentProp_'].cache = FORT_GLOBAL.cacheManager;
    }

    onOutgoing(finalResult: IHttpResult): void {
        // get cache condition from routes
        const componentProp = this['componentProp_']
        const cacheInfo = componentProp.workerInfo.cache;
        // and check if condition exist
        if (cacheInfo) {
            if (cacheInfo.query) {
                for (const key in cacheInfo.query) {
                    if (cacheInfo.query[key] !== componentProp.query[key]) {
                        return;
                    }
                }
            }
            if (cacheInfo.param) {
                for (const key in cacheInfo.param) {
                    if (cacheInfo.param[key] !== componentProp.param[key]) {
                        return;
                    }
                }
            }
            // then cache result
            componentProp.cache.set(
                cacheInfo.key, finalResult, cacheInfo.ttl
            );
        }

    }
}