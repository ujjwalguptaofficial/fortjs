import { FORT_GLOBAL } from "../constants/fort_global";
import { LogHelper } from "./log_helper";
import { ERROR_TYPE } from "../enums/error_type";

export let renderView: (viewName: string, model?: any) => Promise<string>;

if (process.env.NODE_ENV === "production") {
    renderView = (viewName: string, model?: any) => {
        return FORT_GLOBAL.viewEngine.render({
            view: viewName,
            model
        });
    };
}
else {
    renderView = (viewName: string, model?: any) => {
        if (FORT_GLOBAL.viewEngine == null) {
            new LogHelper(ERROR_TYPE.UndefinedViewEngine).throw();
        }
        return FORT_GLOBAL.viewEngine.render({
            view: viewName,
            model
        });
    };
}
