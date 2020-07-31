import {
    Fort,
    __CurrentPath
} from 'fortjs';
import {
    routes
} from './routes';
import {
    FortViewEngine
} from 'eshtml';
import * as path from "path";

export * from './views/index';


Fort.routes = routes;
Fort.viewEngine = FortViewEngine;
Fort.httpServer = require("http").createServer(Fort.onNewRequest).listen(4000);


const staticPath = path.join(__dirname, "../static");

Fort.folders = [{
    alias: "static",
    path: staticPath
}, {
    alias: "/",
    path: staticPath
}];
Fort.appName = "MyFort";
Fort.shouldParseCookie = false

Fort.create();

Fort.logger.debug("Your fort is located at address - localhost:4000");