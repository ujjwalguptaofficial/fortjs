import { Fort } from "fortjs";
import { DefaultController, RandomController, UserController } from "./controllers";
import { FortViewEngine } from "eshtml";
import { CustomErrorHandler } from "./extra/custom_error_handler";

// export * from "./start";
// export * from "./controllers/index";
export * from './views/index';
// export * from './guards/index';
// export * from './extra/index';

class App extends Fort {
    constructor() {
        super();
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
    defaultPath: "default"
})