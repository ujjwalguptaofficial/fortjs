import { renderView } from "./render_view";
import { HttpResult } from "../types";
import { MIME_TYPE, HTTP_STATUS_CODE } from "../enums";

export async function viewResult(viewName: string, model?: any) {
    const viewData = await renderView(viewName, model);
    return {
        contentType: MIME_TYPE.Html,
        responseData: viewData,
        statusCode: HTTP_STATUS_CODE.Ok
    } as HttpResult;
}