export * from './views/index';

import { Fort } from "fortjs";
import { DefaultController, RandomController, UserController } from "./controllers";
import { FortViewEngine } from "eshtml";
import { CustomErrorHandler } from "./extra/custom_error_handler";
import { RequestLogger } from './walls/request_logger';
import * as path from "path";
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

const contentsPath = path.join(__dirname, "../contents");

new App().create({
    defaultPath: "/default",
    port: 8080,
    folders: [{
        alias: "contents",
        path: contentsPath
    }, {
        alias: "dist",
        path: contentsPath
    }, {
        alias: "/",
        path: contentsPath
    }]
})