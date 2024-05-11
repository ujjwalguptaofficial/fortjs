import { LogHelper } from "./log_helper";
import { ERROR_TYPE } from "../enums/error_type";
import { Fort } from "../models";

export let renderView: (viewName: string, model?: any) => Promise<string>;

function executeRenderView(viewName: string, model?: any) {
    return Fort['viewEngine_'].render({
        view: viewName,
        model
    });
}

if (process.env.NODE_ENV === "production") {
    renderView = executeRenderView;
}
else {
    renderView = (viewName: string, model?: any) => {
        if (Fort['viewEngine_'] == null) {
            new LogHelper(ERROR_TYPE.UndefinedViewEngine).throw();
        }
        return executeRenderView(viewName, model);
    };
}
