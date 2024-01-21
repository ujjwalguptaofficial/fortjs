import { Guard } from "../abstracts";
import { FROM_CACHE } from "../constants";
import { HTTP_METHOD } from "../enums";
import { IHttpResult } from "../interfaces";

export class CacheGuard extends Guard {
    async check(): Promise<void | IHttpResult> {
        if (this.request.method !== HTTP_METHOD.Get) {
            // set cache true to allow walls to not cache data;
            this.data[FROM_CACHE] = true;
            return;
        }
        // get cache condition from routes
        const componentProp = this['componentProp_']
        const cacheInfo = componentProp.workerInfo.cache;
        if (!cacheInfo) return;
        const cacheData = await componentProp.cache.get(cacheInfo.key);
        // and check if condition exist
        if (cacheData) {
            // then return cache result
            this.data[FROM_CACHE] = true;
            return cacheData.data;
        }
    }
}