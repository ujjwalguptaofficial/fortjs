import { ICacheData, ICacheStore } from "../interfaces";

const store = new Map<any, ICacheData>();
export class MemoryCacheStore implements ICacheStore {

    async set(option: ICacheData) {
        store.set(option.key, option);
    }

    async get(key: string) {
        return store.get(key);
    }

    async delete(key: string) {
        return store.delete(key);
    }
}