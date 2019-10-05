import { Fort, textResult, redirectResult } from "fortjs";
import { initServer } from "../index";
import { MySingleton } from "../extra/singleton";
import { AuthenticationShield } from "./authentication_shield";

describe('Authentication shield', () => {
    let app: Fort;
    let shield: AuthenticationShield;
    const singleton = new MySingleton();
    beforeAll(async () => {
        app = await initServer();
        shield = new AuthenticationShield('hi');
        shield.initialize();
    });

    it('protect', async () => {
        const expectedResult = await redirectResult('/default/login');
        const result = await shield.protect('ok');
        expect(result).toEqual(expectedResult);
    });

    afterAll(() => {
        return app.destroy();
    });
});