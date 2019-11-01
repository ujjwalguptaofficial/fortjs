
import * as Path from "path";
import { App } from "./app";
import { Router } from "fortjs";

const contentsPath = Path.join(__dirname, "../contents");
// const staticFolderPath = Path.join(__dirname, "../static");
export const initServer = async () => {
    const app = new App();
    await app.create({
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
    });
    return app;
};

if (process.env.NODE_ENV !== "test") {
    initServer().then((app) => {
        app.logger.debug("server started at port: 8080");
        app.logger.debug("environment is :" + process.env.NODE_ENV);
    }).catch(err => {
        console.error(err);
    });
}

exports.initServer = initServer;
exports.Router = Router;
