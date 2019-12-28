import { DefaultController } from "./default_controller";
import { viewResult } from "fortjs";
import { createApp } from "../index";

describe('DefaultController', () => {
    let app;
    let controller;
    beforeAll(async () => {
        controller = new DefaultController();
        app = await createApp();
    });

    it('index', async () => {
        controller.initialize();
        const expectedResult = await viewResult('default/index.html', {
            title: 'FortJs'
        });
        const result = await controller.index('FortJs');
        expect(result).toEqual(expectedResult);
    });

    afterAll(() => {
        return app.destroy();
    });
});