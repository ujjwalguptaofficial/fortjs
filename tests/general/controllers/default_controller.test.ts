import { DefaultController } from "./default_controller";
import { viewResult, Fort } from "fortjs";
import { initServer } from "../index";
import { MySingleton } from "../extra/singleton";

describe('DefaultController', () => {
    let app: Fort;
    beforeAll(async () => {
        app = await initServer();
    });

    it('index', async () => {
        const expectedResult = await viewResult('default/index.html', {
            title: 'FortJs'
        });
        const controller = new DefaultController(new MySingleton());
        controller.initialize();
        // initController(controller);
        const indexMethodOutput = await controller.index('FortJs');
        expect(indexMethodOutput).toEqual(expectedResult);
    });

    afterAll(() => {
        return app.destroy();
    });
});