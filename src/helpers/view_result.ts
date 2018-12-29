import { renderView } from "./render_view";
import { HttpResult } from "../types";
import { MIME_TYPE, HTTP_STATUS_CODE } from "../enums";
import { Global } from "../global";

export const viewResult = async (viewName: string, models?: any) => {
    const viewData = await renderView(viewName, models);
    return {
        contentType: MIME_TYPE.Html,
        responseData: viewData,
        statusCode: HTTP_STATUS_CODE.Ok
    } as HttpResult;
};