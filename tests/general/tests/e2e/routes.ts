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

    it('/api/routes/swagger before', async () => {
        const res = await request.get('/api/routes/swagger/before');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toBe('swagger before');
    });

    it('/api/routes/swagger after', async () => {
        const res = await request.get('/api/routes/swagger/after');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toBe('swagger path: after');
    });

    it('/api/routes/swagger', async () => {
        const res = await request.get('/api/routes/swagger');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toBe('swagger path: ');
    });

    it('/api/routes/swagger/after/123', async () => {
        const res = await request.get('/api/routes/swagger/after/123');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toBe('swagger path: after/123');
    });

    it('/api/routes/swagger/hello.js', async () => {
        const res = await request.get('/api/routes/swagger/hello.js');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toBe('swagger path: hello.js');
    });

    it('/api/routes/swagger/deep/nested/file.js', async () => {
        const res = await request.get('/api/routes/swagger/deep/nested/file.js');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toBe('swagger path: deep/nested/file.js');
    });
});
