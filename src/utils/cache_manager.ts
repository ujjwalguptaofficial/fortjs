import { ICacheData } from "../interfaces";
import { MemoryCacheStore } from "../providers";

export class CacheManager {

    constructor(private cacheStore_: MemoryCacheStore) {

    }

    async set(key: string, data: any, ttl = 600) {
        const cacheData = {
            data,
            expiry: new Date().getTime() + ttl * 1000,
            key: key
        } as ICacheData;
        await this.cacheStore_.set(cacheData);
    }

    async get(key: string) {
        const value = await this.cacheStore_.get(key);
        if (value) {
            if (new Date().getTime() - value.expiry > 0) {
                await this.delete(key);
                return;
            }
            return value;
        }
    }

    async delete(key: string) {
        return this.cacheStore_.delete(key);
    }
}