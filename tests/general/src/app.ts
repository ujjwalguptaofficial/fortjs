import { Fort, Router } from 'fortjs';
import { routes } from './routes';
import { FortViewEngine } from 'eshtml';
import * as Path from "path";
import { RequestLogger } from './walls/request_logger';
import { CustomErrorHandler } from './extra/custom_error_handler';

export class App extends Fort {
    errorHandler = CustomErrorHandler;
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = FortViewEngine;
        this.walls = [RequestLogger];
    }
}

const contentsPath = Path.join(__dirname, "../contents");

const initServer = () => {
    return new App().create({
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


}

initServer();

exports.initServer = initServer;
exports.Router = Router;
