import * as fort from "fortjs";
import { FortViewEngine } from "eshtml";
import { CustomErrorHandler } from "./extra/custom_error_handler";
export const initApp = () => {
    fort.create({
        port: 8080,
        foldersAllowed: ["contents"],
        viewEngine: FortViewEngine,
        errorHandler: CustomErrorHandler,
        defaultPath: "default"
    })
    console.log(`server runing at 8080`);
}
initApp();