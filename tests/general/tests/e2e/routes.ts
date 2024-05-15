import { createRequest } from "../test_utils";

describe("/expect", () => {

    const request = createRequest();

    it('routes default', async () => {
        const res = await request.get('/api/routes');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/json');
        // expect(removeSpaceAndNewLine(res.text)).toBe('ok');
    });

    it('routes default with extra slash', async () => {
        const res = await request.get('/api/routes/');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/json');
        // expect(removeSpaceAndNewLine(res.text)).toBe('ok');
    });

    it('/api/routes/someMethod', async () => {
        const res = await request.get('/api/routes/someMethod');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        // expect(removeSpaceAndNewLine(res.text)).toBe('ok');
    });

    it('/api/routes/sendNotification', async () => {
        const res = await request.get('/api/routes/sendNotification');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toBe('notification sent');
    });
});
