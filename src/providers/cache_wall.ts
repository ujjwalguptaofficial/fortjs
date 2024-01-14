import { Wall } from "../abstracts";
import { FORT_GLOBAL } from "../constants";
import { IHttpResult } from "../interfaces";

function isCacheable(cacheConditionData, data2) {
    if (cacheConditionData) {
        for (const key in cacheConditionData) {
            if (cacheConditionData[key] !== data2[key]) {
                return;
            }
        }
    }
    return true;
}

export class CacheWall extends Wall {
    async onIncoming(): Promise<void | IHttpResult> {
        this['componentProp_'].cache = FORT_GLOBAL.cacheManager;
    }

    onOutgoing(finalResult: IHttpResult): void {
        // get cache condition from routes
        const componentProp = this['componentProp_']
        const cacheInfo = componentProp.workerInfo?.cache;
        if (!cacheInfo) return;
        // and check if condition exist
        if (!isCacheable(cacheInfo.query, componentProp.query)) {
            return;
        }
        if (!isCacheable(cacheInfo.param, componentProp.param)) {
            return;
        }
        // then cache result
        componentProp.cache.set(
            cacheInfo.key, finalResult, cacheInfo.ttl
        );
    }
}