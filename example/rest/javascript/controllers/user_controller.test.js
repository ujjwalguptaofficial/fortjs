import { jsonResult } from "fortjs";
import { createApp } from "../index";
import { UserController } from "./user_controller";
import { UserService } from "../services/user_service";

describe('UserController', () => {
    let app;
    let controller;
    beforeAll(async () => {
        app = await createApp();
        controller = new UserController(new UserService());
    });

    it('getUsers', async () => {
        const expectedResult = await jsonResult(controller.service.getUsers());
        const indexMethodOutput = await controller.getUsers();
        expect(indexMethodOutput).toEqual(expectedResult);
    });

    afterAll(() => {
        return app.destroy();
    });
});