import { AxiosResponse } from "axios";
import { browserAccept, createRequest, removeSpaceAndNewLine } from "../test_utils";

describe("/swagger controller", () => {

    const request = createRequest();

    it('/swagger before', async () => {
        const res = await request.get('/swagger/before');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toBe('before WildCard');
    });

    it('/swagger after', async () => {
        const res = await request.get('/swagger/after');
        expect(res.status).toBe(404);
    });

    it('/swagger', async () => {
        const res = await request.get('/swagger');
        expect(res.status).toBe(200);
        expect(removeSpaceAndNewLine(res.data)).toBe('<html><head><title>Welcometofort</title></head><body><h1>Index</h1></body></html>'); // Use 'data' instead of 'text'
    });

    it('/swagger/contents', async () => {
        const res = await request.get('/swagger/contents', {
            headers: {
                Accept: browserAccept
            }
        });
        expect(res.status).toBe(200);
        expect(res.headers).toHaveProperty('content-type', 'text/html');
    });

    it('/contents/png', async () => {
        const res = await request.get('/swagger/contents/JsStore_16_16.png', {
            headers: {
                Accept: browserAccept
            }
        });
        expect(res.status).toBe(200);
        expect(res.headers).toHaveProperty('content-type', 'image/png');
        expect(res.headers).toHaveProperty('custom-header-from-outgoing-wall', '*');
    });

    it('/json', async () => {
        const res: AxiosResponse<any> = await request.get('/swagger/home/json', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        expect(res.headers['content-type']).toBe('application/json');
        expect(res.data).toEqual({ "key": "hello", "value": "world" }); // Use 'data' property instead of 'text'
    });
});