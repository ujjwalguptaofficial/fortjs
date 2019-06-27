import { Fort, Router, ViewEngine } from 'fortjs';
import { routes } from './routes';
import * as Path from "path";
import { RequestLogger } from './walls/request_logger';
import { CustomErrorHandler } from './extra/custom_error_handler';
import { MustacheViewEngine } from 'fortjs';
import { Wall1 } from './walls/wall1';
import { WallWithoutOutgoing } from './walls/wall_without_outgoing';

export class App extends Fort {
    errorHandler = CustomErrorHandler;
    constructor() {
        super();
        this.routes = routes;
        // this.viewEngine = MustacheViewEngine;
        this.walls = [RequestLogger, Wall1, WallWithoutOutgoing];
    }
}

const contentsPath = Path.join(__dirname, "../contents");
// const staticFolderPath = Path.join(__dirname, "../static");
const initServer = () => {
    return new App().create({
        defaultPath: "/default",
        port: 8080,
        folders: [{
            alias: "/contents",
            path: contentsPath
        }, {
            alias: "dist",
            path: contentsPath
        }, {
            alias: "/",
            path: contentsPath
        }]
    }).then(() => {
        console.log("server started at port: 8080");
        console.log("environment is :" + process.env.NODE_ENV);
    }).catch(err => {
        console.error(err);
    });

};

initServer();

exports.initServer = initServer;
exports.Router = Router;
