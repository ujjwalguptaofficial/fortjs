import { renderView } from "./render_view";
import { HttpResult } from "../types";
import { MIME_TYPE, HTTP_STATUS_CODE } from "../enums";


export const viewResult = (viewName: string, model?: any) => {
    return renderView(viewName, model).then(viewData => {
        return {
            contentType: MIME_TYPE.Html,
            responseData: viewData,
            statusCode: HTTP_STATUS_CODE.Ok
        } as HttpResult;
    });
};