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

export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = FortViewEngine;
        this.httpServer = require("http").createServer(this.onNewRequest).listen(4000);
    }
}

const staticPath = path.join(__dirname, "../static");

new App().create({
    //defaultPath: "default",
    folders: [{
        alias: "static",
        path: staticPath
    }, {
        alias: "/",
        path: staticPath
    }],
    appName: "MyFort",
    shouldParseCookie: false
});

console.log("Your fort is located at address - localhost:4000");