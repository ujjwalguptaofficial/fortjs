import { Fort, jsonResult } from "fortjs";
import { createApp } from "../index";
import { UserController } from "./user_controller";
import { UserService } from "../services/user_service";

describe('UserController', () => {
    let app: Fort;
    let controller: UserController;
    beforeAll(async () => {
        app = await createApp() as any;
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