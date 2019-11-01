import { FortGlobal } from "../fort_global";
import { isEnvDev } from "./is_env_dev";
import { LogHelper } from "./log_helper";
import { ERROR_TYPE } from "../enums/error_type";

export const renderView = (viewName: string, model?: any) => {
    if (isEnvDev()) {
        if (FortGlobal.viewEngine == null) {
            new LogHelper(ERROR_TYPE.UndefinedViewEngine).throw();
        }
    }
    return FortGlobal.viewEngine.render({
        view: viewName,
        model: model
    });
};