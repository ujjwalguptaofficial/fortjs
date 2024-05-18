import { DefaultController } from "@/controllers/default_controller";
import { viewResult, Fort, textResult } from "fortjs";
import { createApp } from "@/index";
import { MySingleton } from "@/extra/singleton";

describe('DefaultController', () => {
    const singleton = new MySingleton();
    const controller: DefaultController = new DefaultController(singleton);

    beforeAll(async () => {
        await createApp();
    });

    it('index', async () => {
        controller.initialize();
        const expectedResult = await viewResult('src/views/default/index.html', {
            title: 'FortJs'
        });
        const result = await controller.index('FortJs');
        expect(result).toEqual(expectedResult);
    });

    it('setSingletonValue', async () => {
        controller.initialize({
            query: {
                value: 'hello world'
            }
        });
        const output = await controller.setSingletonValue();
        expect(output).toEqual(undefined);
    });

    it('getSingletonValue', async () => {
        const expectedResult = await textResult('hello world');
        const result = await controller.getSingletonValue(singleton);
        expect(result).toEqual(expectedResult);
    });

    it('getFriends', async () => {
        const expectedResult = await textResult('hello world');
        const result = await controller.getSingletonValue(singleton);
        expect(result).toEqual(expectedResult);
    });

    afterAll(() => {
        return Fort.destroy();
    });
});