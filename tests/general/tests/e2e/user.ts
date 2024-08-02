import { browserAccept, createRequest } from "../test_utils";
const cookie = require('cookie');

describe("/user", () => {

    const request = createRequest();

    it("/?shield_injection_test", async () => {
        const res = await request.get('/user/?shield_injection_test=true');
        expect(res).toHaveProperty('status', 200);
        expect(res.data).toEqual('hello in shield protect called');
    });

    it("/", async () => {
        const res = await request.get('/user/');
        expect(res).toHaveProperty('status', 200);
        expect(res.data).toEqual('user default action');
    });

    it("/{userId}", async () => {
        const res = await request.get('/user/1');
        expect(res).toHaveProperty('status', 200);
        const user = {
            id: 1,
            name: 'ujjwal',
            address: 'bhubaneswar india',
            emailId: 'ujjwal@mg.com',
            gender: 'male',
            password: 'admin'
        };
        expect(res.data).toEqual(user);
    });

    it("/{userId} with 0", async () => {
        const res = await request.get('/user/0', {
            headers: {
                'Accept': browserAccept
            }
        });
        // .accept(browserAccept).buffer();
        expect(res).toHaveProperty('status', 200);
        expect(res.headers["content-type"]).toEqual('application/xml');
        expect(res.data).toEqual(`<?xml version="1.0" encoding="utf-8"?><users><user><id>1</id><name>ujjwal</name><address>bhubaneswar india</address><emailId>ujjwal@mg.com</emailId><gender>male</gender><password>admin</password></user></users>`);
    });

    it("/{userId} with throw exception", async () => {
        const res = await request.get('/user/1/?throwException=true');
        expect(res).toHaveProperty('status', 500);
    });

    it("/ + guard_injection_test", async () => {
        const res = await request.post('/user?guard_injection_test=true');
        expect(res).toHaveProperty('status', 200);
        expect(res.data).toEqual('hello injection ok in guard');
    });

    it("/ + post", async () => {
        const user = {
            name: 'angela',
            address: 'newyork street 5 america',
            emailId: 'angela@mg.com',
            gender: 'female',
            password: 'hiangela'
        };
        const res = await request.post('/user', user)
        //.send(user);
        expect(res).toHaveProperty('status', 201);
        expect(res.data).toBeInstanceOf(Object);
        expect(res.data).toHaveProperty('name');
        expect(res.data).toHaveProperty('id', 2);
        expect(res.data).toHaveProperty('address');
        expect(res.data).toHaveProperty('emailId');
        expect(res.data).toHaveProperty('gender');
        expect(res.data).toHaveProperty('password');
    });

    it("/ + post with exception throw", async () => {
        const user = {
            name: 'angela',
            address: 'newyork street 5 america',
            emailId: 'angela@mg.com',
            gender: 'female',
            password: 'hiangela'
        };
        const res = await request.post('/user?throwException=true', user);
        //.send(user);
        expect(res).toHaveProperty('status', 500);
    });

    it("/ + post with invalid user", async () => {
        const user = {
            name: '',
            address: 'newyork street 5 america',
            emailId: 'angela@mg.com',
            gender: 'femalde',
            password: 'ab'
        };
        const res = await request.post('/user', user);
        expect(res).toHaveProperty('status', 400);
        expect(res.data).toEqual('password must be longer than or equal to 5 characters');
    });

    it("/ + patch", async () => {
        const res = await request.patch('/user');
        expect(res).toHaveProperty('status', 405);
        const allowsValue = res.headers.allow;
        expect(allowsValue).toContain("PUT");
        expect(allowsValue).toContain("GET");
        expect(allowsValue).toContain("POST");
    });

    it("/ + put", async () => {
        const user = {
            id: 2,
            name: 'angela yu',
            address: 'newyork street 5 america',
            emailId: 'angela@mg.com',
            gender: 'female',
            password: 'hiangelayu'
        };
        const res = await request.put('/user', user);
        expect(res).toHaveProperty('status', 200);
        expect(res.data).toEqual("user updated");
    });

    it("/ + remove", async () => {
        const res = await request.delete('/user/2');
        expect(res).toHaveProperty('status', 200);
        expect(res.data).toEqual("user deleted");
    });

    it("/getcounter", async () => {
        const res = await request.get('/user/counter/shield');
        expect(res).toHaveProperty('status', 200);
        expect(res.data).toBeInstanceOf(Object);
        expect(res.data).toHaveProperty('authenticationShieldCounter', 13);
    });

    it("/getprofile without profile", async () => {
        const res = await request.get('/user/profile/me');
        expect(res).toHaveProperty('status', 401);
        expect(res.data).toEqual("expect profile in query");
    });

    it("/getprofile with profile", async () => {
        const res = await request.get('/user/profile/me?isProfile=true');
        expect(res).toHaveProperty('status', 200);
        const user = {
            id: 1,
            name: 'ujjwal',
            address: 'bhubaneswar india',
            emailId: 'ujjwal@mg.com',
            gender: 'male',
            password: 'admin'
        };
        expect(res.data).toEqual(user);
    });

    it("user profile invalid page", async () => {
        const res = await request.get('/user/profiles/me');
        expect(res).toHaveProperty('status', 404);
    });

    it("user profile invalid worker", async () => {
        const res = await request.get('/user/profile/mes');
        expect(res).toHaveProperty('status', 404);
    });

    it("/getnestedprofile without profile", async () => {
        const res = await request.get('/user/profile/nested/me');
        expect(res).toHaveProperty('status', 401);
        expect(res.data).toEqual("expect profile in query");
    });

    it("/getnestedprofile with profile and without nested", async () => {
        const res = await request.get('/user/profile/nested/me?isProfile=true');
        expect(res).toHaveProperty('status', 401);
        expect(res.data).toEqual("expect isNested in query");
    });

    it("/getprofile with profile", async () => {
        const res = await request.get('/user/profile/nested/me?isProfile=true&isNested=true');
        expect(res).toHaveProperty('status', 200);
        const user = {
            id: 1,
            name: 'ujjwal',
            address: 'bhubaneswar india',
            emailId: 'ujjwal@mg.com',
            gender: 'male',
            password: 'admin'
        };
        expect(res.data).toEqual({
            nestedProfile: user
        });
    });

    it("user nested profile invalid page", async () => {
        const res = await request.get('/user/profile/nesteds/me');
        expect(res).toHaveProperty('status', 404);
    });

    it("user nested profile invalid end point", async () => {
        const res = await request.get('/user/profile/nested/mes');
        expect(res).toHaveProperty('status', 404);
    });

    it("/thrown by guard using header", async () => {
        const body = {
            throwexceptionbyguard: 'true'
        };
        const res = await request.post('/user/', {}, {
            headers: {
                ...body
            }
        })
        expect(res).toHaveProperty('status', 500);
        expect(res.data).toContain("thrown by guard");
    });

    it("/logout", async () => {
        const res = await request.get('/home/logout');
        expect(res).toHaveProperty('status', 200);
        const parsedCookie = cookie.parse(res.headers[`set-cookie`][0]);
        expect(parsedCookie).toHaveProperty(`fort_session_id`);
        expect(parsedCookie).toHaveProperty(`Path`, '/');
        expect(parsedCookie).toHaveProperty(`Max-Age`, '-1');
        expect(parsedCookie).toHaveProperty(`Expires`, 'Thu, 01 Jan 1970 00:00:00 GMT');
        expect(res.headers[`set-cookie`][0]).toContain('HttpOnly');
    });

    it("/user after logout", async () => {
        const res = await request.get('/user/', {
            maxRedirects: 0
        });
        // .redirects(0);
        expect(res).toHaveProperty('status', 302);
        expect(res.headers).toHaveProperty('location', '/default/login');
    });

    it("user profile unauthenticated page", async () => {
        const res = await request.get('/user/profile/me', {
            maxRedirects: 0
        });
        // .redirects(0);
        expect(res).toHaveProperty('status', 302);
        expect(res.headers).toHaveProperty('location', '/default/login');
    });

    it("/thrown by shield using header", async () => {
        const body = {
            throwexceptionbyshield: 'true'
        };
        const res = await request.post('/user/', {}, {
            headers: {
                ...body
            }
        })
        expect(res).toHaveProperty('status', 500);
        expect(res.data).toContain("thrown by shield");
    });

    it("/pass invalid regex", async () => {
        const res = await request.get('/user/+CSCOE');
        expect(res).toHaveProperty('status', 500);
        expect(res.data).toContain("Invalid regular expression: /^+CSCOE$/i: Nothing to repeat");
    });
});
