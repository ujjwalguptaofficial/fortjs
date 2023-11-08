import { Fort } from "fortjs";
import { routes } from "@/routes";

export const createApp = async () => {
    Fort.routes = routes;
    Fort.shouldParseCookie = false
    await Fort.create();
    process.env.APP_URL = `http://localhost:${Fort.port}`;
};
if (process.env.NODE_ENV !== "test") {
    createApp().then(() => {
        Fort.logger.debug(`Your fort is located at address - ${process.env.APP_URL}`);
    }).catch(err => {
        console.error(err);
    });
}

