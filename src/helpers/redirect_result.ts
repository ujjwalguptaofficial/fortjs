import { HTTP_RESULT_TYPE, MIME_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { IHttpResult } from "../interfaces";

export const redirectResult = (url: string) => {
    return {
        contentType: MIME_TYPE.Text,
        responseData: url,
        statusCode: HTTP_STATUS_CODE.Redirect,
        type: HTTP_RESULT_TYPE.Redirect
    } as IHttpResult;
};