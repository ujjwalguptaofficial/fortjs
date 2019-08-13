import axios from "axios";
import { createApp } from "..";
const instance = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 1000
});

describe('/default', () => {

    let app;
    beforeAll(async () => {
        app = await createApp();
    });

    it('index', async () => {
        const response = await instance.get('/', {
            headers: {
                accept: 'text/html'
            }
        });
        expect(response.status).toEqual(200);
        expect(response.headers['content-type']).toEqual('text/html');
        expect(response.data).toContain('<title>FortJs</title>');
    });

    afterAll(() => {
        return app.destroy();
    });

});