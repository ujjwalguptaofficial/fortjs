import { App } from "./app";
import * as path from "path";

export const createApp = async () => {
    const app = new App();
    await app.create({
        folders: [{
            alias: "/",
            path: path.join(__dirname, "../static")
        }]
    });
    process.env.APP_URL = "http://localhost:4000";
    return app;
};
if (process.env.NODE_ENV !== "test") {
    createApp().then((app) => {
        console.log(`Your fort is located at address - ${process.env.APP_URL}`);
        app.initSocketIo();
    }).catch(err => {
        console.error(err);
    });
}

