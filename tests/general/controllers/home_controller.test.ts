import { Fort, textResult } from "fortjs";
import { initServer } from "../index";
import { MySingleton } from "../extra/singleton";
import { HomeController } from "./home_controller";

describe('HomeController', () => {
    let app: Fort;
    let controller: HomeController;
    const singleton = new MySingleton();
    beforeAll(async () => {
        app = await initServer();
        controller = new HomeController(singleton);
        controller.initialize();
    });

    it('login with invalid password', async () => {
        controller.initialize({
            body: {
                emailId: "ujjwal@mg.com",
                password: "adm"
            }
        });
        const expectedResult = await textResult('Invalid credential');
        const result = await controller.login();
        expect(result).toEqual(expectedResult);
    });

    it('login with valid password', async () => {
        controller.initialize({
            body: {
                emailId: "ujjwal@mg.com",
                password: "admin"
            }
        });
        const expectedResult = await textResult('Authenticated');
        const result = await controller.login();
        expect(result).toEqual(expectedResult);
        expect(await controller.session.get('userId')).toEqual(1);
        expect(await controller.session.get('emailId')).toEqual("ujjwal@mg.com");
    });

    afterAll(() => {
        return app.destroy();
    });
});