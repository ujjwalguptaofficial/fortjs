import { browserAccept, createRequest, methodNotAllowedMsg, url } from "../test_utils";
import { AxiosResponse } from 'axios'; // Import AxiosResponse from 'axios' package
import cookie from 'cookie';

describe("/home", () => {
    const request = createRequest();

    it('/json + browser accept setting', async () => {
        const res: AxiosResponse<any> = await require('axios').default.get(`${url}/home/json`, {
            headers: {
                'Accept': browserAccept
            }
        });
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/xml');
        expect(res.data).toBe('<?xml version="1.0" encoding="utf-8"?><root><key>hello</key><value>world</value></root>');
    });

    it('/json', async () => {
        const res: AxiosResponse<any> = await request.get('/home/json', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        expect(res.data).toEqual({ "key": "hello", "value": "world" }); // Use 'data' property instead of 'text'
    });

    it('/html', async () => {
        const res: AxiosResponse<any> = await request.get('/home/html', {
            headers: {
                'Accept': browserAccept
            }
        });
        expect(res.headers['custom-header-from-outgoing-wall']).toBe('*');
        expect(res.headers['content-type']).toBe('text/html');
        expect(res.data).toBe('<h1>hey there i am html</h1>'); // Use 'data' property instead of 'text'
    });

    it('/text', async () => {
        const res: AxiosResponse<any> = await request.get('/home/text');
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toBe('text'); // Use 'data' property instead of 'text'
    });

    it('/text + http: post', async () => {
        const res: AxiosResponse<any> = await request.post('/home/text', null, {
            headers: {
                'Accept': browserAccept
            }
        });
        expect(res.status).toBe(405);
        expect(res.headers['custom-header-from-outgoing-wall']).toBe('*');
        expect(res.headers['content-type']).toBe('text/html');
        expect(res.headers['allow']).toBe('GET');
        expect(res.data).toBe(methodNotAllowedMsg);
    });

    it('/post with no body', async () => {
        const invalidJson = 'This is not valid JSON';

        const res: AxiosResponse<any> = await request.post('/home/post', invalidJson, {
            headers: {
                'Content-Type': 'application/json',
                // Accept: 'text/html'
            }
        })
        expect(res.data).toBe(400);
        expect(res.headers['content-type']).toBe('text/html');
        expect(res.data).toContain("Post data is invalid");
    });

    it('/post with empty body', async () => {
        const res: AxiosResponse<any> = await request.post('/home/post', {}, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/json');
        expect(res.data).toEqual({});
    });

    it('/post ', async () => {
        const data = {
            key: "hello"
        };
        const res: AxiosResponse<any> = await request.post('/home/post', data)
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('application/json');
        expect(res.headers['custom-header-from-outgoing-wall']).toBe('*');
        expect(res.data).toEqual({ "key": "hello" });
    });

    it('/post with xml', async () => {
        const data = `<?xml version="1.0" encoding="UTF-8" ?>
        <key>hello</key>`;
        const res: AxiosResponse<any> = await request.post('/home/post', data, {
            headers: {
                'Content-Type': 'application/xml'
            }
        });
        expect(res.status).toBe(400);
        expect(res.headers['custom-header-from-outgoing-wall']).toBe('*');
        expect(res.data).toContain('no xml parser configured');
    });

    it('/post + http: get', async () => {
        const res: AxiosResponse<any> = await request.get('/home/post', {
            headers: {
                'Accept': 'text/html'
            }
        });
        expect(res.status).toBe(405);
        expect(res.headers['content-type']).toBe('text/html');
        expect(res.headers['allow']).toBe('POST');
        expect(res.data).toBe(methodNotAllowedMsg);
    });

    it('/post + http method: option', async () => {
        const res: AxiosResponse<any> = await request.options('/home/post', {
            headers: {
                'Accept': 'text/html'
            }
        });
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/html');
        expect(res.headers['custom-header-from-outgoing-wall']).toBe('*');
        expect(res.headers['allow']).toBe('POST');
        expect(res.data).toBe("");
    });

    it("/redirect test", async () => {
        const res: AxiosResponse<any> = await request.get('/home/redirect', {
            maxRedirects: 0
        });
        // .redirects(0);
        expect(res.status).toBe(302);
        expect(res.headers['custom-header-from-outgoing-wall']).toBe('*');
        expect(res.headers['location']).toBe('html');
    });

    it("/user allowMe without login", async () => {
        const res: AxiosResponse<any> = await request.get('/user/allow/Me');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('text/plain');
        expect(res.data).toBe('i am allowed');
    });

    it("/user without login", async () => {
        const res: AxiosResponse<any> = await request.get('/user/', {
            maxRedirects: 0
        });
        // .redirects(0);
        expect(res.status).toBe(302);
        expect(res.headers['location']).toBe('/default/login');
    });

    it("/default/login", async () => {
        const user = {
            emailId: `ujjwal@mg.com`,
            password: "admin"
        };
        const res: AxiosResponse<any> = await request.post('/home/login', user);
        expect(res.status).toBe(200);
        expect(res.data).toBe("Authenticated");
        const parsedCookie = cookie.parse(res.headers[`set-cookie`][0]);
        console.log('cookie', parsedCookie);
        expect(parsedCookie).toHaveProperty(`fort_session_id`);
        expect(parsedCookie).toHaveProperty(`Path`, '/');
        expect(parsedCookie).toHaveProperty(`Max-Age`, '3600');
        expect(res.headers[`set-cookie`][0]).toContain('HttpOnly');
    });

    it('/singleton test', async () => {
        var value = 'hello';
        const res1: AxiosResponse<any> = await request.get('/getSingletonValue');
        expect(res1.status).toBe(200);
        expect(res1.data).toBe('asf');

        const res2: AxiosResponse<any> = await request.get('/setSingletonValue?value=' + value);
        expect(res2.status).toBe(200);

        const res3: AxiosResponse<any> = await request.get('/getSingletonValue');
        expect(res3.status).toBe(200);
        expect(res3.data).toBe(value);
    });

    it('/getUsers', async () => {
        const res: AxiosResponse<any> = await request.get('/home/getUsers');
        expect(res.status).toBe(200);
        const user = [{
            id: 1,
            name: 'ujjwal',
            address: 'bhubaneswar india',
            emailId: 'ujjwal@mg.com',
            gender: 'male',
            password: 'admin'
        }];
        expect(res.data).toEqual(user);
    });

    it('/getUsers with http method option', async () => {
        const res: AxiosResponse<any> = await request.options('/home/getusers');
        expect(res.status).toBe(200);
        expect(res.data).toEqual("");
        expect(res.data).toEqual("");
    });

    it('/getStudents', async () => {
        const res: AxiosResponse<any> = await request.get('/home/getStudents');
        expect(res.status).toBe(200);
        const data = [{
            id: 1,
            name: 'ujjwal',
            type: 'student'
        }];
        expect(res.data).toEqual(data);
    });

    it('/getEmployees', async () => {
        const res: AxiosResponse<any> = await request.get('/home/getEmployees');
        expect(res.status).toBe(200);
        const data = [{
            id: 1,
            name: 'ujjwal',
            type: 'employee'
        }];
        expect(res.data).toEqual(data);
    });

    it('/getAllFromServices', async () => {
        const res: AxiosResponse<any> = await request.get('/home/getAllFromServices');
        expect(res.status).toBe(200);
        const data = [{
            id: 1,
            name: 'ujjwal',
            type: 'student'
        }, {
            id: 1,
            name: 'ujjwal',
            type: 'employee'
        }, {
            id: 1,
            name: 'ujjwal',
            address: 'bhubaneswar india',
            emailId: 'ujjwal@mg.com',
            gender: 'male',
            password: 'admin'
        }];
        expect(res.data).toEqual(data);
    });

    it('/getParam', async () => {
        const res: AxiosResponse<any> = await request.get('/home/param/UjjwaL?name=Ujjwal%20Gupta');
        expect(res.status).toBe(200);
        const data = {
            param: {
                value: "UjjwaL"
            },
            query: {
                name: "Ujjwal Gupta"
            }
        };
        expect(res.data).toEqual(data);
    });

});
