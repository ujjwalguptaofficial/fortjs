import { ICacheData, ICacheStore } from "../interfaces";

export class CacheManager {

    constructor(private cacheStore_: ICacheStore) {

    }

    /**
     * set the cache by supplying key and value
     *
     * @param {*} key
     * @param {*} data
     * @param {number} [ttl=600] - time to live in second, default 600
     * @memberof CacheManager
     */
    async set(key: any, data: any, ttl = 600) {
        const cacheData = {
            data,
            expiry: new Date().getTime() + ttl * 1000,
            key: key
        } as ICacheData;
        await this.cacheStore_.set(cacheData);
    }

    /**
     * return data from cache by key if exist and not expired, otherwise return undefined
     *
     * @param {*} key
     * @return {*} 
     * @memberof CacheManager
     */
    async get(key: any) {
        const value = await this.cacheStore_.get(key);
        if (value) {
            if (new Date().getTime() - value.expiry > 0) {
                await this.delete(key);
                return;
            }
            return value;
        }
    }

    /**
     * delete the cache by key
     *
     * @param {*} key
     * @return {*} 
     * @memberof CacheManager
     */
    async delete(key: any) {
        return this.cacheStore_.delete(key);
    }
}
