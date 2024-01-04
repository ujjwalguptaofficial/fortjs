import { Router, Fort, textResult } from "fortjs";
import { initServer } from "./index";
import { routes } from "./routes";

describe('DefaultController', () => {
    beforeAll(async () => {
        await initServer();
    });

    it('check for route structure in array', async () => {
        const router = new Router();
        const routesAsArray = router.routesAsArray;
        expect(routesAsArray).toHaveLength(
            routes.length + 2 + 1
            // +2 due to nested child
            // +1 unused controller
        );
        const controllerName = "HomeController";
        const controller = routesAsArray.find(q => q.controllerName === controllerName);
        const routeConfig = routes.find(q => q.controller.name === controllerName);
        expect(controller != null).toBe(true);
        expect(routeConfig != null).toBe(true);
        expect(controller.path).toEqual(routeConfig.path);
    });

    afterAll(() => {
        return Fort.destroy();
    });
});