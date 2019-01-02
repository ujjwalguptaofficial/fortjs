import { Global } from "../global";
import { isEnvDev } from "./is_env_dev";
import { LogHelper } from "./log_helper";
import { ERROR_TYPE } from "../enums/error_type";

export const renderView = (viewName: string, model?: any) => {
    if (isEnvDev()) {
        if (Global.viewEngine == null) {
            new LogHelper(ERROR_TYPE.UndefinedViewEngine).throw();
        }
    }
    return Global.viewEngine.render({
        view: viewName,
        model: model
    });
};