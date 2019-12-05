import axios from "axios";
import { createApp } from "..";
import { App } from "../app";



describe('/default', () => {

    let app: App;
    let httpRequest;
    beforeAll(async () => {
        app = await createApp();
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
        return app.destroy();
    });

});