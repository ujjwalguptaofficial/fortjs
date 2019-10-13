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
    createApp().then(async (app) => {
        console.log(`Your fort is located at address - ${process.env.APP_URL}`);
        await app.initDatabase();
        console.log('db connected');
    }).catch(err => {
        console.error(err);
    });
}
