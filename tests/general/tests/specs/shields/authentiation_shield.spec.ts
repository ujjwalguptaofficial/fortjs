import { Fort, textResult, redirectResult } from "fortjs";
import { createApp } from "@/index";
import { AuthenticationShield } from "@/shields/authentication_shield";

describe('Authentication shield', () => {
    let shield: AuthenticationShield;
    beforeAll(async () => {
        await createApp();
        shield = new AuthenticationShield('hi');
        shield.initialize();
    });

    it('protect', async () => {
        const expectedResult = await redirectResult('/default/login');
        const result = await shield.protect('ok');
        expect(typeof result.responseData).toBe('function');
        expect(typeof expectedResult.responseData).toBe('function');
    });

    afterAll(() => {
        return Fort.destroy();
    });
});
