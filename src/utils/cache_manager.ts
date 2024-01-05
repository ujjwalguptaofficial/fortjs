import { ICacheData, ICacheOptionStore } from "../interfaces";
import { MempryAPICacheStore } from "../providers";

export class APICacheManager {

    constructor(public cacheStore: MempryAPICacheStore) {

    }

    async set(key: string, data: any, ttl = 600) {
        const cacheData = {
            data,
            expiry: new Date().getTime() + ttl * 1000,
            key: key
        } as ICacheData;
        await this.cacheStore.set(cacheData);
    }

    async get(key: string) {
        const value = await this.cacheStore.get(key);
        if (value) {
            if (new Date().getTime() - value.expiry > 0) {
                await this.cacheStore.delete(key);
                return;
            }
            return value;
        }
    }
}