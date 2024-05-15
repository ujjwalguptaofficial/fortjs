import { createRequest, removeSpaceAndNewLine } from "../test_utils";
const cookie = require('cookie');

const queryStringErrMessage = "Bad query string data - query string data does not match with expected value";
const bodyErrorMessage = "Bad body data - body data does not match with expected value";

describe("/expect", () => {

    const request = createRequest();

    it('convert', async () => {
        const res = await request.get('/expect/convert?id=0&name=&extra=');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(removeSpaceAndNewLine(res.data)).toBe('ok');
    });

    it('convert get with less data', async () => {
        const res = await request.get('/expect/convert?name=&extra=');
        expect(res.status).toBe(400);
        // expect(res.header['content-type']).toBe('text/plain');
        // expect(removeSpaceAndNewLine(res.text)).toBe('ok');
    });

    it('convert post', async () => {
        const res = await request.post('/expect/convert', { id: 0, name: "", extra: "" });
        // expect(res.status).toBe(200);
        // expect(res.headers['content-type']).toBe('text/plain');
        expect(removeSpaceAndNewLine(res.data || '')).toBe('ok');
    });

    it('convert post with less data', async () => {
        const res = await request.post('/expect/convert', { name: "", extra: "" }, {
            headers: {
                "Accept": "text/html"
            }
        });
        expect(res.status).toBe(400);
        expect(res.headers['content-type']).toBe('text/html');
        // expect(removeSpaceAndNewLine(res.text)).toBe(bodyErrorMessage);
    });

    it('model test', async () => {
        const user = {
            extra: 'wefr',
            id: 0,
            name: 'angela',
            address: 'newyork street 5 america',
            emailId: 'angela@mg.com',
            gender: 'female',
            password: 'hiangela'
        };
        const res = await request.post('/expect/model', user);
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(removeSpaceAndNewLine(res.data)).toBe('ok');
    });

    it('model test with wrong data type', async () => {
        const user = {
            extra: 'wefr',
            id: '0', // id type is number
            name: 'angela',
            address: 'newyork street 5 america',
            emailId: 'angela@mg.com',
            gender: 'female',
            password: 'hiangela'
        };
        const res = await request.post('/expect/model', user);
        expect(res.status).toBe(200);
        // expect(res.header['content-type']).toBe('text/plain');
        // expect(removeSpaceAndNewLine(res.text)).toBe('ok');
    });

    it('model test get', async () => {
        const user = {
            extra: 'wefr',
            id: 0,
            name: 'angela',
            address: 'newyork street 5 america',
            emailId: 'angela@mg.com',
            gender: 'female',
            password: 'hiangela'
        };
        const queryString = Object.entries(user)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');
        const res = await request.get(`/expect/model?${queryString}`);
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(removeSpaceAndNewLine(res.data)).toBe('ok');
    });

    it('param', async () => {
        const res = await request.get('/expect/param/1/ujjwal');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/json');
        expect(res.data).toEqual({
            id: 1,
            name: 'ujjwal'
        });
    });
});
