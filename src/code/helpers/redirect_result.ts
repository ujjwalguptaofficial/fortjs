import { MIME_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { HttpResult } from "../types/http_result";

export const redirectResult = (url: string) => {
    return {
        contentType: MIME_TYPE.Text,
        responseData: url,
        statusCode: HTTP_STATUS_CODE.Redirect,
        shouldRedirect: true
    } as HttpResult;
};