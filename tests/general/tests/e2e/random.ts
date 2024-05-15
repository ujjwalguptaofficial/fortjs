import { createRequest, removeSpaceAndNewLine } from "../test_utils";

describe("/random", () => {
    const request = createRequest();

    it("/ + accept:text/html", async () => {
        const res = await request.get('/random/', {
            headers: {
                'Accept': 'text/html'
            }
        })

        expect(res.status).toBe(200);
        expect(res.data).toBe("<p>hello world</p>");
    });

    it("/ + accept:text/plain", async () => {
        const res = await request.get('/random/', {
            headers: {
                'Accept': 'text/plain'
            }
        });

        expect(res.status).toBe(200);
        expect(res.data).toBe("hello world");
    });

    it("/ + accept:application/json", async () => {
        const res = await request.get('/random/', {
            headers: {
                'Accept': 'application/json'
            }
        });

        expect(res.status).toBe(200);
        const result = {
            result: "hello world"
        };
        expect(res.data).toEqual(result);
    });

    it("/ + accept:application/xml", async () => {
        const res = await request.get('/random/', {
            headers: {
                'Accept': 'application/xml'
            }
        });

        expect(res.status).toBe(406);
    });

    it("/form", async () => {
        const data = {
            hello: 'world'
        };
        const res = await request.post('/random/form', data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        // .accept("application/json").type('form').send(data);
        expect(res.status).toBe(200);
        expect(res.data).toEqual(data);
    });

    it("/throw", async () => {
        const res = await request.post('/random/throw');

        expect(res.status).toBe(500);
        expect(removeSpaceAndNewLine(res.data)).toBe('<h1>InternalServerError</h1><h3>message:throwtest</h3>');
    });

    it("/download + get", async () => {
        const res = await request.get('/random/download');

        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/html');
        expect(res.headers['content-disposition']).toBe('attachment;filename=index.html');
    });

    it("/download + post", async () => {
        const res = await request.post('/random/download');

        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/html');
        expect(res.headers['content-disposition']).toBe('attachment;filename=alias.html');
    });

    it("/file", async () => {
        const res = await request.post('/random/file');

        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('image/png');
        expect(res.headers['content-disposition']).toBeUndefined();
    });

    // it("/file + unsupported accept", async () => {
    //     const res = await request.post('/random/file').accept("application/json");
    //    
    //     expect(res.status).toBe(406);
    //     expect(res.headers['content-type']).toBe('text/html');
    //     expect(res.headers['content-disposition']).toBeUndefined();
    // });

    it("/null + get", async () => {
        const res = await request.get('/random/null');

        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toBe("");
    });

    it("/status-override using wall", async () => {
        const res = await request.get('/random/status-override');

        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toBe("overrided");
    });
});
