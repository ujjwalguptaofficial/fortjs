import * as path from "path";
import { Router, Fort } from "fortjs";
import { CustomErrorHandler } from "./extra/custom_error_handler";
import { routes } from "./routes";
import { CustomResultMapper } from "./extra/result_mapper";
import { MyComponentOption } from "./extra/my_component_option";
import { WallWithoutOutgoing } from "./walls/wall_without_outgoing";
import { Wall1 } from "./walls/wall1";
import { RequestLogger } from "./walls/request_logger";
import { CounterScheduler } from "./crons/counter";
import { XmlToJsonParser } from "./xmlparser";

const contentsPath = path.join(__dirname, "../contents");

export const createApp = async () => {
    Fort.errorHandler = CustomErrorHandler;
    Fort.port = 8080;
    Fort.routes = routes;
    Fort.resultMapper = CustomResultMapper;
    Fort.walls = [RequestLogger, Wall1];
    Fort.walls.push(WallWithoutOutgoing);
    Fort.componentOption = MyComponentOption;

    Fort.folders = [{
        alias: "/contents",
        path: contentsPath
    }, {
        alias: "dist",
        path: contentsPath
    }, {
        alias: "/",
        path: contentsPath
    }];
    Fort.scheduler.add({
        expression: "*/1 * * * * *",
        task: CounterScheduler,
        name: "Counter"
    });
    Fort.scheduler.startAll();
    Fort.useCache = true;
    Fort.xmlParser = XmlToJsonParser;
    await Fort.create();
    process.env.APP_URL = `http://localhost:${Fort.port}`;
};
if (process.env.NODE_ENV !== "test") {
    createApp().then(() => {
        Fort.logger.debug(`Your fort has been forged and is now ready for exploration at ${process.env.APP_URL}`);
    }).catch(err => {
        console.error(err);
    });
}

