import { AxiosResponse } from 'axios';
import cookie from 'cookie';
import { createRequest } from '~/tests/test_utils';

describe("/cookie", () => {
    const request = createRequest();

    it("/{cookie} with get for invalid cookie", async () => {
        const res: AxiosResponse<any> = await request.get('/cookie/session');
        expect(res.status).toBe(404);
        expect(res.data).toBe('cookie not found');
    });

    it("/ + post", async () => {
        const cookies = {
            cookieValue: 'ujjwal'
        };
        const cookieName = `user_name`;
        const res: AxiosResponse<any> = await request.post(`/cookie/${cookieName}`, cookies);
        expect(res.status).toBe(200);
        expect(res.data).toEqual(expect.objectContaining({
            name: cookieName,
            value: cookies.cookieValue
        }));
        const parsedCookie = cookie.parse(res.headers['set-cookie'][0]);
        expect(parsedCookie).toEqual(expect.objectContaining({
            [cookieName]: cookies.cookieValue,
            'Max-Age': '5000'
        }));
    });

    it("/{cookie} with get for valid cookie", async () => {
        const cookieName = `user_name`;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const res: AxiosResponse<any> = await request.get(`/cookie/${cookieName}`);
        expect(res.status).toBe(200);
        expect(res.data).toEqual(expect.objectContaining({
            name: cookieName,
            value: 'ujjwal'
        }));
    });

    it("/{cookie} with put", async () => {
        const cookieName = `user_name`;
        const cookies = {
            cookieValue: 'ujjwal_gupta'
        };
        const res: AxiosResponse<any> = await request.put(`/cookie/${cookieName}`, cookies);
        expect(res.status).toBe(200);
        expect(res.data).toEqual(expect.objectContaining({
            name: cookieName,
            value: cookies.cookieValue
        }));
        const parsedCookie = cookie.parse(res.headers['set-cookie'][0]);
        expect(parsedCookie).toEqual(expect.objectContaining({
            [cookieName]: cookies.cookieValue
        }));
    });

    it("/{cookie} with remove", async () => {
        const cookieName = `user_name`;
        const cookies = {
            cookieValue: 'ujjwal_gupta'
        };
        const res: AxiosResponse<any> = await request.delete(`/cookie/${cookieName}`);
        expect(res.status).toBe(200);
        const parsedCookie = cookie.parse(res.headers['set-cookie'][0]);
        expect(parsedCookie).toEqual(expect.objectContaining({
            [cookieName]: cookies.cookieValue,
            'Max-Age': '-1',
            'Expires': 'Thu, 01 Jan 1970 00:00:00 GMT'
        }));
    });

    it("/{cookie} with get after deleting cookie", async () => {
        const res: AxiosResponse<any> = await request.get('/cookie/user_name');
        expect(res.status).toBe(404);
        expect(res.data).toBe('cookie not found');
    });
});
