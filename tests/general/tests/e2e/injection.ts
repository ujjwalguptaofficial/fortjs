import { createRequest } from "../test_utils";

describe("Injection", () => {
    const request = createRequest();
    it("/getMultipleStringInjection", async () => {
        const res = await request.get('/Injection/getMultipleStringInjection');
        expect(res.status).toEqual(200);
        const data = { "value": ["Welcome to fort", "Hello World", "ujjwal", "Gupta"] };
        expect(res.data).toEqual(data);
    })

    it("/getMultipleStringInjection", async () => {
        const res = await request.get('/Injection/manualSingletonCreated');
        expect(res.status).toEqual(200);
        const data = { "result": ['ujjwal'] };
        expect(res.data).toEqual(data);
    })

    it("/manualSingletonNotCreated", async () => {
        const res = await request.get('/Injection/manualSingletonNotCreated');
        expect(res.status).toEqual(200);
        const data = { "result": 'temp' };
        expect(res.data).toEqual(data);
    })
})
