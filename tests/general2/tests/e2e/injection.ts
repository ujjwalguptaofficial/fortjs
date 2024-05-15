import { createRequest } from "../test_utils";

describe("Injection", () => {
    const request = createRequest();
    it("/getMultipleStringInjection", async () => {
        const res = await request.get('/Injection/getMultipleStringInjection');
        expect(res.status).toEqual(200);
        const data = { "value": ["Welcome to fort", "Hello World", "ujjwal", "Gupta"] };
        expect(res.data).toEqual(data);
    })
})