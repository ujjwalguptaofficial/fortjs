import { DefaultController } from "./default_controller";
import { viewResult, Fort, textResult } from "fortjs";
import { initServer } from "../index";
import { MySingleton } from "../extra/singleton";

describe('DefaultController', () => {
    let app: Fort;
    let controller: DefaultController;
    const singleton = new MySingleton();
    beforeAll(async () => {
        app = await initServer();
        controller = new DefaultController(singleton);
        controller.initialize();
    });

    it('index', async () => {
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