import axios from "axios";
import { createApp } from "..";
import { Fort } from "fortjs";


describe('/default', () => {

    let httpRequest;
    beforeAll(async () => {
        await createApp();
        httpRequest = axios.create({
            baseURL: process.env.APP_URL,
            timeout: 1000
        });
    });

    it('index', async () => {
        const response = await httpRequest.get('/', {
            headers: {
                accept: 'text/html'
            }
        });
        expect(response.status).toEqual(200);
        expect(response.headers['content-type']).toEqual('text/html');
        expect(response.data).toContain('<title>FortJs</title>');
    });

    afterAll(() => {
        return Fort.destroy();
    });

});