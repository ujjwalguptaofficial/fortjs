import { DefaultController } from "./default_controller";
import { viewResult, Fort } from "fortjs";
import { createApp } from "../index";

describe('DefaultController', () => {
    let app: Fort;
    beforeAll(async () => {
        app = await createApp() as any;
    });

    it('index', async () => {
        const expectedResult = await viewResult('default/index.html', {
            title: 'FortJs'
        });
        const indexMethodOutput = await new DefaultController().index('FortJs');
        expect(indexMethodOutput).toEqual(expectedResult);
    });

    afterAll(() => {
        return app.destroy();
    });
});