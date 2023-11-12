import { renderView } from "./render_view";
import { IHttpResult } from "../interfaces";
import { MIME_TYPE, HTTP_STATUS_CODE, HTTP_RESULT_TYPE } from "../enums";


export const viewResult = (viewName: string, model?: any) => {
    return renderView(viewName, model).then(viewData => {
        return {
            contentType: MIME_TYPE.Html,
            responseData: viewData,
            statusCode: HTTP_STATUS_CODE.Ok,
            type: HTTP_RESULT_TYPE.Default
        } as IHttpResult;
    });
};