import { createRequest, removeSpaceAndNewLine, browserAccept, isProduction } from '~/tests/test_utils';

describe("/default", () => {
    const request = createRequest();

    it('default path', async () => {
        const res = await request.get('/');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.headers['x-powered-by']).toBe('fort');
        expect(removeSpaceAndNewLine(res.data)).toBe('<html><head><title>Welcometofort</title></head><body><h1>Index</h1></body></html>'); // Use 'data' instead of 'text'
    });

    it('index1 - multiple assign', async () => {
        const res = await request.get('/index1');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.headers['x-powered-by']).toBe('fort');
        expect(res.data).toBe('UjjwalGupta'); // Use 'data' instead of 'text'
    });

    it('default path with browserAccept', async () => {
        const res = await request.get('/', {
            headers: {
                'Accept': browserAccept
            }
        })
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/html');
        expect(res.headers['x-powered-by']).toBe('fort');
        expect(removeSpaceAndNewLine(res.data)).toBe('<html><head><title>Welcometofort</title></head><body><h1>Index</h1></body></html>'); // Use 'data' instead of 'text'
    });

    it('/friends with get', async () => {
        const res = await request.get('/friends', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/json');
        expect(res.data).toEqual({ "friends": ["mohan", "sohan"] });
    });

    it('/friends with post', async () => {
        const res = await request.post('/friends');
        expect(res.status).toBe(200);
    });

    it('/friends with put', async () => {
        const res = await request.put('/friends', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        expect(res.status).toBe(405);
    });

    it('/get-mongo', async () => {
        const res = await request.get('/get-mongo', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        expect(res.status).toBe(200);
    });

    it('/get-mongo with browserAccept', async () => {
        const res = await request.get('/get-mongo', {
            headers: {
                'Accept': browserAccept
            }
        });
        expect(res.status).toBe(500);
    });

    it('/singleton test', async () => {
        const value = 'asf';
        await request.get(`/setSingletonValue?value=${value}`);
        const res = await request.get('/getSingletonValue');
        expect(res.status).toBe(200);
        expect(res.data).toBe(value); // Use 'data' instead of 'text'
    });

    it('/workerWithoutPromise', async () => {
        console.log('isProduction', isProduction); // Define the missing variable 'isProduction'
        const res = await request.get('/workerWithoutPromise?doNotCount=true', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        expect(res.status).toBe(200);
    });

    it('empty controller', async () => {
        const res = await request.get('/empty/noWorker', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        expect(res.status).toBe(500);
        expect(res.data).toContain('Invalid route registration in Controller : EmptyController and method : dailyAccountBalance.Route exist but method has not been decorated with worker.');
    });

    it('/influencers.rss', async () => {
        let res = await request.get('/influencers.rss');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toEqual('application/rss+xml');
        // console.log('text', res.text, 'body', res.body, 'data', res.data);
        expect(res.data).toContain('<rss');
    })
});
