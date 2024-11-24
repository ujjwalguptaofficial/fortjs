import { Controller, http, cacheFor, HTTP_METHOD, textResult, jsonResult, route, HTTP_STATUS_CODE, worker } from "fortjs";

const hits = {

};
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

    fruits = ['Apple', 'Mango', 'Banana'];

    @cacheFor(1)
    @http.get("/fruits")
    async getFruits() {
        return jsonResult({
            data: this.fruits
        })
    }

    @http.get("/fruits-without-cache")
    async getFruitsWithoutCache() {
        return jsonResult({
            data: this.fruits
        })
    }

    @cacheFor(1)
    @http.post("/fruits")
    async addFruits() {
        const { fruits } = this.body;
        this.fruits = fruits;
        return jsonResult({
            data: this.fruits
        })
    }

    @cacheFor(1)
    @http.delete("/count")
    async getCacheCountFromStore() {
        return jsonResult({
            data: this.cache['cacheStore_'].count()
        })
    }

    @cacheFor(1)
    @http.put("/store")
    async getCacheStore() {
        const map = this.cache['cacheStore_'].store();
        let obj = Array.from(map).reduce((obj, [key, value]) => (
            Object.assign(obj, { [key]: value }) // Be careful! Maps can have non-String keys; object literals can't.
        ), {});
        // console.log("map", obj);
        return jsonResult({
            data: obj
        })
    }

    @worker()
    @route("/hit")
    @cacheFor(Infinity)
    async cacheHit() {
        let prevHitValue = hits[this.request.method];
        prevHitValue = prevHitValue ? prevHitValue : 0;
        hits[this.request.method] = ++prevHitValue;
        return jsonResult(hits);
    }
}
