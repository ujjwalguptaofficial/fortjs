import { FortGlobal } from "../constants/fort_global";
import { LogHelper } from "./log_helper";
import { ERROR_TYPE } from "../enums/error_type";

export let renderView: (viewName: string, model?: any) => Promise<string>;

if (FortGlobal.isProduction === true) {
    renderView = (viewName: string, model?: any) => {
        return FortGlobal.viewEngine.render({
            view: viewName,
            model
        });
    };
}
else {
    renderView = (viewName: string, model?: any) => {
        if (FortGlobal.viewEngine == null) {
            new LogHelper(ERROR_TYPE.UndefinedViewEngine).throw();
        }
        return FortGlobal.viewEngine.render({
            view: viewName,
            model
        });
    };
}
