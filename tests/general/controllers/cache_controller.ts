import { Controller, http, worker, HTTP_METHOD, textResult, jsonResult, route, HTTP_STATUS_CODE } from "fortjs";

export class CacheController extends Controller {

    @http.post("/add")
    async cacheDataManually() {
        const { key, value, expiry } = this.body;
        await this.cache.set(key, value, expiry);
        return textResult("Ok");
    }

    @http.post("/get")
    async getCacheData() {
        const { key } = this.body;
        const value = await this.cache.get(key);
        return jsonResult({
            value: value && value.data
        });
    }

    @http.post("/delete")
    async deleteCache() {
        const { key } = this.body;
        const value = await this.cache.delete(key);
        return jsonResult({
            data: value
        });
    }
}