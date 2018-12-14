export * from './views/index';

import { Fort } from "fortjs";
import { DefaultController, RandomController, UserController } from "./controllers";
import { FortViewEngine } from "eshtml";
import { CustomErrorHandler } from "./extra/custom_error_handler";
import { RequestLogger } from './walls/request_logger';
class App extends Fort {
    viewEngine = FortViewEngine;
    errorHandler = CustomErrorHandler;

    constructor() {
        super();
        this.walls = [RequestLogger];
        this.routes = [{
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
    mappedPaths: [{
        existingPath: "contents",
        newPath: "/"
    }, {
        existingPath: "contents",
        newPath: "dist"
    }],
    defaultPath: "/default"
})