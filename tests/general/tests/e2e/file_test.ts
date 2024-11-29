import { browserAccept, createRequest } from "../test_utils";

describe("/file test", () => {
    const request = createRequest();

    it('/contents/ => with slash', async () => {
        const res = await request.get('/contents/', {
            headers: {
                Accept: browserAccept
            }
        });
        expect(res.headers).toHaveProperty('custom-header-from-outgoing-wall', '*');
        expect(res.status).toBe(200);
        expect(res.headers).toHaveProperty('content-type', 'text/html');
    });

    it('/contents => without slash', async () => {
        const res = await request.get('/contents', {
            headers: {
                Accept: browserAccept
            }
        });
        expect(res.status).toBe(200);
        expect(res.headers).toHaveProperty('content-type', 'text/html');
    });

    it('/contents/index.html', async () => {
        const res = await request.get('/contents/', {
            headers: {
                Accept: browserAccept
            }
        });
        expect(res.status).toBe(200);
        expect(res.headers).toHaveProperty('content-type', 'text/html');
    });

    it('/content/', async () => {
        const res = await request.get('/content/', {
            headers: {
                Accept: browserAccept
            }
        });
        expect(res.headers).toHaveProperty('custom-header-from-outgoing-wall', '*');
        expect(res.status).toBe(404);
        expect(res.headers).toHaveProperty('content-type', 'text/html');
    });

    it('/contents/png', async () => {
        const res = await request.get('/contents/JsStore_16_16.png', {
            headers: {
                Accept: browserAccept
            }
        });
        expect(res.status).toBe(200);
        expect(res.headers).toHaveProperty('content-type', 'image/png');
        expect(res.headers).toHaveProperty('custom-header-from-outgoing-wall', '*');
    });

    it('folders allowed but with content not exist', async () => {
        const res = await request.get('/contents/hi.png', {
            headers: {
                Accept: browserAccept
            }
        });
        expect(res.status).toBe(404);
    });

    it('invalid file', async () => {
        const res = await request.get('/fc.txt', {
            headers: {
                Accept: "text/html"
            }
        });
        expect(res.status).toBe(404);
        expect(res.headers).toHaveProperty('content-type', 'text/html');
    });

    it("map file test - `/index.html`", async () => {
        const res = await request.get('/index.html');
        expect(res.status).toBe(200);
        expect(res.headers).toHaveProperty('content-type', 'text/html');
    });

    it("map file test - `/dist/index.html`", async () => {
        const res = await request.get('/dist/index.html');
        expect(res.status).toBe(200);
        expect(res.headers).toHaveProperty('content-type', 'text/html');
    });

    it("map file test - `/dist`", async () => {
        const res = await request.get('/dist');
        expect(res.status).toBe(200);
        expect(res.headers).toHaveProperty('content-type', 'text/html');
    });

    it("map file test - `/dist/`", async () => {
        const res = await request.get('/dist/');
        expect(res.status).toBe(200);
        expect(res.headers).toHaveProperty('content-type', 'text/html');
    });
});
