import { DefaultController } from "./default_controller";
import { viewResult, Fort, textResult } from "fortjs";
import { initServer } from "../index";
import { MySingleton } from "../extra/singleton";

describe('DefaultController', () => {
    let controller: DefaultController;
    const singleton = new MySingleton();
    beforeAll(async () => {
        await initServer();
        controller = new DefaultController(singleton);
        controller.initialize();
    });

    it('index', async () => {
        const expectedResult = await viewResult('views/default/index.html', {
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