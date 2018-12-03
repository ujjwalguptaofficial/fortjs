export * from './views/index';

import { Fort } from "fortjs";
import { DefaultController, RandomController, UserController } from "./controllers";
import { FortViewEngine } from "eshtml";
import { CustomErrorHandler } from "./extra/custom_error_handler";
import { RequestLogger } from './walls/request_logger';
class App extends Fort {
    constructor() {
        super();
        this.walls = [RequestLogger];
        this.routers = [{
            controller: DefaultController,
            path: "/default"
        }, {
            controller: RandomController,
            path: "/random"
        }, {
            controller: UserController,
            path: "/user"
        }]
    }
}

new App().create({
    port: 8080,
    foldersAllowed: ["contents"],
    viewEngine: FortViewEngine,
    errorHandler: CustomErrorHandler,
    defaultPath: "/default"
})