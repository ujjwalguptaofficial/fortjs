import { createRequest, removeSpaceAndNewLine } from "../test_utils";

describe("wall test", () => {
    const request = createRequest();

    it("/blocked by wall using get", async () => {
        const query: Record<string, string> = {
            'blockByWall': 'true'
        };
        const res = await request.get('/default/getdata?' + new URLSearchParams(query).toString());
        expect(res.status).toBe(200);
        expect(res.data).toBe('blocked by wall');
        expect(res.headers['custom-header-from-outgoing-wall']).toBeUndefined();
    });

    it("/blocked by wall using header", async () => {
        const header = {
            blockByWall: 'true'
        };
        const res = await request.post('/home/getdata', null, {
            headers: header
        });
        expect(res.status).toBe(200);
        expect(res.headers['custom-header-from-outgoing-wall']).toBeUndefined();
        expect(res.data).toBe('blocked by wall');
    });

    it("/thrown by wall using header", async () => {
        const body = {
            throwException: 'true'
        };
        const res = await request.post('/home/getdata', null, {
            headers: body
        });
        expect(res.status).toBe(500);
        expect(res.data).toContain("thrown by wall");
    });

    it("/404", async () => {
        const res = await request.get('/home/getdatasss');
        expect(res.status).toBe(404);
        // expect(res.data).toBeInstanceOf(Object);
        expect(res.headers['custom-header-from-incoming-wall']).toBe('*');
        expect(res.headers['injection-result']).toBe('wall constructor onIncoming called on outgoing called');
        expect(res.headers['wall-without-outgoing-wall']).toBe('*');
        expect(removeSpaceAndNewLine(res.data)).toEqual("<h1>Therequestedresource/home/getdatassswasnotfound.</h1>");
    });

    it("/500 by controler", async () => {
        const res = await request.post('/random/throw');
        expect(res.status).toBe(500);
        expect(removeSpaceAndNewLine(res.data)).toEqual('<h1>InternalServerError</h1><h3>message:throwtest</h3>');
        // expect(res.data).toBeInstanceOf(Object);
        expect(res.headers['custom-header-from-incoming-wall']).toBe('*');
    });

    it("/getdata", async () => {
        const res = await request.get('/home/getdata');
        expect(res.status).toBe(200);
        expect(res.data).toBeInstanceOf(Object);
        expect(res.headers['custom-header-from-incoming-wall']).toBe('*');
        expect(res.headers['injection-result']).toBe('wall constructor onIncoming called on outgoing called');
        expect(res.headers['wall-without-outgoing-wall']).toBe('*');
        expect(res.data).toHaveProperty('reqCount', 129);
    });
});
