import { DefaultController } from "./default_controller";
import { viewResult, Fort } from "fortjs";
import { createApp } from "../index";

describe('DefaultController', () => {
    let app: Fort;
    let controller: DefaultController;
    beforeAll(async () => {
        app = await createApp();
        controller = new DefaultController();
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