import { createApp } from "@/index";
import { CookieController } from "@/controllers/cookie_controller";
import { viewResult, Fort, IHttpResponse } from "fortjs";

describe('DefaultController', () => {
    let controller = new CookieController();

    beforeAll(async () => {
        await createApp();
        controller.initialize();
    });

    it('execute middleware successfull', async () => {
        let middlewareExecuted = false;
        const middleware = (req, res: IHttpResponse, next) => {
            middlewareExecuted = true;
            next();
        };

        await controller.middleware(middleware).execute();
        expect(middlewareExecuted).toEqual(true);
    });

    it('execute middleware with reject', async () => {
        let middlewareExecuted = false;
        const middleware = (req, res: IHttpResponse, next) => {
            middlewareExecuted = true;
            next("Rejected");
        };
        try {
            await controller.middleware(middleware).execute();
        } catch (error) {
            expect(error).toEqual("Rejected");
        }
        expect(middlewareExecuted).toEqual(true);
    });

    afterAll(() => {
        return Fort.destroy();
    });
});