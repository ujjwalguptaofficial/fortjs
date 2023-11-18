
import * as Path from "path";
import { Router, Fort } from "fortjs";
import { CustomErrorHandler } from "./extra/custom_error_handler";
import { routes } from "./routes";
import { CustomResultMapper } from "./extra/result_mapper";
import { MyComponentOption } from "./extra/my_component_option";
import { WallWithoutOutgoing } from "./walls/wall_without_outgoing";
import { Wall1 } from "./walls/wall1";
import { RequestLogger } from "./walls/request_logger";

const contentsPath = Path.join(__dirname, "../contents");
// const staticFolderPath = Path.join(__dirname, "../static");
export const initServer = async () => {

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
    await Fort.create();
};

if (process.env.NODE_ENV !== "test") {
    initServer().then(() => {
        Fort.logger.debug("server started at port: 8080");
        Fort.logger.debug("environment is :" + process.env.NODE_ENV);
    }).catch(err => {
        console.error(err);
    });
}

// process.on("beforeExit", async () => {
//     await Fort.destroy();
//     console.log("server destoryed");
// })

exports.initServer = initServer;
exports.Router = Router;
