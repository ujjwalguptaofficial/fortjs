import { DefaultController } from "./default_controller";
import { viewResult } from "fortjs";
import { createApp } from "../index";

describe('DefaultController', () => {
    let app;
    let controller;
    beforeAll(async () => {
        app = await createApp();
        controller = new DefaultController();
    });

    it('index', async () => {
        controller.initialize();
        const expectedResult = await viewResult('default/index.html', {
            title: 'FortJs'
        });
        const indexMethodOutput = await controller.index('FortJs');
        expect(indexMethodOutput).toEqual(expectedResult);
    });

    afterAll(() => {
        return app.destroy();
    });
});