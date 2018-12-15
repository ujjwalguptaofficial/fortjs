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
    }
}

new App().create({
    //defaultPath: "default",
    folders: [{
        alias: "static",
        path: path.join(__CurrentPath, "static")
    }, {
        alias: "/",
        path: path.join(__CurrentPath, "static")
    }],
    appName: "MyFort"
});

console.log("Your fort is located at address - localhost:4000");