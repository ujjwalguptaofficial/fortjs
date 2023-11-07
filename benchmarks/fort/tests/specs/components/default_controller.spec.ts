import { DefaultController } from "@/controllers/default_controller";
import { viewResult, Fort } from "fortjs";
import { createApp } from "@/index";

describe('DefaultController', () => {
    const controller: DefaultController = new DefaultController();

    beforeAll(async () => {
        await createApp();
    });

    it('index', async () => {
        controller.initialize();
        const expectedResult = await viewResult('../src/views/default/index.html', {
            title: 'FortJs'
        });
        const result = await controller.index();
        expect(result).toEqual(expectedResult);
    });

    afterAll(() => {
        return Fort.destroy();
    });
});