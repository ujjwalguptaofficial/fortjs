import { SessionController } from "@/controllers/session_controller";
import { Fort, textResult } from "fortjs";
import { createApp } from "@/index";

describe('SessionController', () => {
    const controller: SessionController = new SessionController();

    beforeAll(async () => {
        await createApp();
    });

    it('addMany', async () => {
        controller.initialize({
            body: {
                key1: 'Hello',
                value1: 'World',
                key2: 'Ujjwal',
                value2: 'Gupta'
            }
        });
        expect(controller.session.sessionId).toBeUndefined();
        const result = await controller.addMany();
        expect(result).toEqual(textResult('saved'));

        expect(controller.session.sessionId).toBeDefined();
        expect(await controller.session.get('Hello')).toEqual('World');
        expect(await controller.session.get('Ujjwal')).toEqual('Gupta');
        expect(await controller.cookie.getCookie(`fort_session_id`)).toEqual(
            {
                name: 'fort_session_id',
                value: controller.session.sessionId
            }
        );

    });

    afterAll(() => {
        return Fort.destroy();
    });
});