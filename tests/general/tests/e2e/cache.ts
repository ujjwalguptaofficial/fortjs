import { createRequest } from "../test_utils";

describe("/user", () => {
    const request = createRequest();

    it("/get cache for not saved data", async () => {
        const response = await request.post('/cache/get', {
            key: "Hello"
        });
        expect(response.status).toBe(200);
        expect(response.data).toEqual({});
    });

    it("check cache size", async () => {
        const response = await request.delete('/cache/count');
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ data: 0 });
    });

    it("/add cache", async () => {
        const response = await request.post('/cache/add', {
            key: "Hello",
            value: "World"
        });
        expect(response.status).toBe(200);
        expect(response.data).toEqual("Ok");
    });

    it("/get cache for saved data", async () => {
        const response = await request.post('/cache/get', {
            key: "Hello"
        });
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ value: "World" });
    });

    it("/update cache", async () => {
        const response = await request.post('/cache/add', {
            key: "Hello",
            value: "Fortjs"
        });
        expect(response.status).toBe(200);
        expect(response.data).toEqual("Ok");
    });

    it("check cache size", async () => {
        const response = await request.delete('/cache/count');
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ data: 1 });
    });

    it("/get cache for saved data", async () => {
        const response = await request.post('/cache/get', {
            key: "Hello"
        });
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ value: "Fortjs" });
    });

    it("/delete cache for saved data", async () => {
        const response = await request.post('/cache/delete', {
            key: "Hello"
        });
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ data: true });
    });

    it("check cache size", async () => {
        const response = await request.delete('/cache/count');
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ data: 0 });
    });

    it("/get cache for deleted data", async () => {
        const response = await request.post('/cache/get', {
            key: "Hello"
        });
        expect(response.status).toBe(200);
        expect(response.data).toEqual({});
    });

    it("/add cache with ttl", async () => {
        const response = await request.post('/cache/add', {
            key: "TTL",
            value: "Check",
            expiry: 1
        });
        expect(response.status).toBe(200);
        expect(response.data).toEqual("Ok");
    });

    it("/get cache for saved data", async () => {
        const response = await request.post('/cache/get', {
            key: "TTL"
        });
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ value: "Check" });
    });

    it("check cache size", async () => {
        const response = await request.delete('/cache/count');
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ data: 1 });
    });

    it("/check after 1 second", async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await request.post('/cache/get', {
            key: "TTL"
        });
        expect(response.status).toBe(200);
        expect(response.data).toEqual({});
    });

    it("check cache size", async () => {
        const response = await request.delete('/cache/count');
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ data: 0 });
    });

    it("cache fruits", async () => {
        const response = await request.get('/cache/fruits');
        expect(response.status).toBe(200);
        const fruitsResponse = await request.get('/cache/fruits-without-cache');
        expect(response.data).toEqual(fruitsResponse.data);
    });

    it("cache fruits check after updating fruits value", async () => {
        const fruits = ['Apple'];
        const response = await request.post('/cache/fruits', {
            fruits: fruits
        });
        expect(response.status).toBe(200);
        const responseAfterUpdate = await request.get('/cache/fruits');
        expect(responseAfterUpdate.data).not.toEqual({ data: fruits });
    });

    it("expire cache fruits and check new fruits value", async () => {
        const fruits = ['Apple'];
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await request.get('/cache/fruits');
        expect(response.data).not.toEqual({ data: fruits });
    });

    it("get cache store", async () => {
        const response = await request.put('/cache/store');
        expect(response.status).toBe(200);
        const store = response.data.data;
        const storeKeys = Object.keys(store);
        expect(storeKeys.length).toBe(1);
        expect(storeKeys).toEqual(["CacheController_getFruits"]);
    });

    it("get cache hit", async () => {
        const response = await request.get('/cache/hit');
        expect(response.status).toBe(200);
        const data = response.data;
        expect(data).toEqual({ "GET": 1 });
    });

    it("get cache hit again", async () => {
        const response = await request.get('/cache/hit');
        expect(response.status).toBe(200);
        const data = response.data;
        expect(data).toEqual({ "GET": 1 });
    });

    it("head cache hit", async () => {
        const response = await request.head('/cache/hit');
        expect(response.status).toBe(200);
        const data = response.data;
        expect(data).toEqual("");
    });

    it("head cache hit again", async () => {
        const response = await request.head('/cache/hit');
        expect(response.status).toBe(200);
        const data = response.data;
        expect(data).toEqual("");
    });

    it("post cache hit", async () => {
        const response = await request.post('/cache/hit');
        expect(response.status).toBe(200);
        const data = response.data;
        expect(data).toEqual({ "GET": 1, "POST": 1 });
    });

    it("post cache hit again", async () => {
        const response = await request.post('/cache/hit');
        expect(response.status).toBe(200);
        const data = response.data;
        expect(data).toEqual({ "GET": 1, "POST": 2 });
    });
});
