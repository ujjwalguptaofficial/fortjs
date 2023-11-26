import { Fort } from "fortjs";
import { routes } from "@/routes";

export const createApp = async () => {
    Fort.routes = routes;
    Fort.shouldParseCookie = false;
    Fort.shouldParseBody = false;
    await Fort.create();
    console.log("walls", Fort.walls);
    process.env.APP_URL = `http://localhost:${Fort.port}`;
};
if (process.env.NODE_ENV !== "test") {
    createApp().then(() => {
        Fort.logger.debug(`Your fort is located at address - ${process.env.APP_URL}`);
    }).catch(err => {
        console.error(err);
    });
}

