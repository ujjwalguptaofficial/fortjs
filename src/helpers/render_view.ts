import { FortGlobal } from "../fort_global";
import { LogHelper } from "./log_helper";
import { ERROR_TYPE } from "../enums/error_type";

export let renderView: (viewName: string, model?: any) => Promise<string>;

if (FortGlobal.isDevelopment === true) {
    renderView = (viewName: string, model?: any) => {
        if (FortGlobal.viewEngine == null) {
            new LogHelper(ERROR_TYPE.UndefinedViewEngine).throw();
        }
        return FortGlobal.viewEngine.render({
            view: viewName,
            model: model
        });
    };
}
else {
    renderView = (viewName: string, model?: any) => {
        return FortGlobal.viewEngine.render({
            view: viewName,
            model: model
        });
    };
}
