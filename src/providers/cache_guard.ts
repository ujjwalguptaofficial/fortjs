import { Guard } from "../abstracts";
import { IHttpResult } from "../interfaces";

export class CacheGuard extends Guard {
    async check(): Promise<void | IHttpResult> {
        // get cache condition from routes
        const componentProp = this['componentProp_']
        const cacheInfo = componentProp.workerInfo.cache;
        const cacheData = await componentProp.cache.get(cacheInfo.key);
        // and check if condition exist
        if (cacheData) {
            // then return cache result
            return cacheData.data;
        }
    }
}