import { createRequest } from "../test_utils";

const cookie = require('cookie');

describe("/session", () => {

    const request = createRequest();

    it("/getAll", async () => {
        const res = await request.get('/session/getAll');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/json');
        expect(res.data.value).toEqual({});
    });

    it("/exist", async () => {
        const res = await request.get('/session/exist?key=id');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toEqual('key is not found');
    });

    it("/get", async () => {
        const res = await request.get('/session/get?key=id');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/json');
        expect(res.data).toEqual({ value: null });
    });

    it("/session/add", async () => {
        const payload = {
            key: "id",
            value: 5
        };
        const res = await request.post('/session/add', payload);
        expect(res.status).toBe(200);
        expect(res.data).toEqual("saved");
    });

    it("/session/add", async () => {
        const payload = {
            key: "hello",
            value: "world"
        };
        const res = await request.post('/session/add', payload);
        expect(res.status).toBe(200);
        expect(res.data).toEqual("saved");
    });

    it("/exist", async () => {
        const res = await request.get('/session/exist?key=id');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toEqual('key is found');
    });

    it("/get", async () => {
        const res = await request.get('/session/get?key=id');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/json');
        expect(res.data).toEqual({ value: 5 });
    });

    it("/session/update", async () => {
        const payload = {
            key: "id",
            value: '6'
        };
        const res = await request.put('/session/update', payload);
        expect(res.status).toBe(200);
        expect(res.data).toEqual("updated");
    });

    it("/exist", async () => {
        const res = await request.get('/session/exist?key=id');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toEqual('key is found');
    });

    it("/get", async () => {
        const res = await request.get('/session/get?key=id');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/json');
        expect(res.data).toEqual({ value: '6' });
    });

    it("/remove", async () => {
        const res = await request.delete('/session/remove?key=id');
        expect(res.status).toBe(200);
        expect(res.data).toEqual("removed");
    });

    it("/exist", async () => {
        const res = await request.get('/session/exist?key=id');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toEqual('key is not found');
    });

    it("/get", async () => {
        const res = await request.get('/session/get?key=id');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/json');
        expect(res.data).toEqual({ value: null });
    });

    it("/get for key which is not deleted", async () => {
        const res = await request.get('/session/get?key=hello');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/json');
        expect(res.data).toEqual({ value: 'world' });
    });

    it("/session/add-many", async () => {
        const payload = {
            key1: "hello",
            value1: 'world',
            key2: 'ujjwal',
            value2: 'gupta'
        };
        const res = await request.post('/session/add-many', payload);
        expect(res.status).toBe(200);
        expect(res.data).toEqual("saved");
    });

    it("/getAll", async () => {
        const res = await request.get('/session/getAll');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/json');
        expect(res.data.value).toEqual({
            "hello": "world",
            "id": null,
            "ujjwal": "gupta"
        });
    });

    it("/clear", async () => {
        const res = await request.delete('/session/clear');
        expect(res.status).toBe(200);
        expect(res.data).toEqual("cleared");
    });

    it("/get after clearing", async () => {
        let res = await request.get('/session/get?key=hello');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/json');
        expect(res.data).toEqual({ value: null });

        res = await request.get('/session/get?key=ujjwal');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/json');
        expect(res.data).toEqual({ value: null });
    });
});
