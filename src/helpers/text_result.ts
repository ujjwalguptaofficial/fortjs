import { HTTP_RESULT_TYPE, HTTP_STATUS_CODE, MIME_TYPE } from "../enums";
import { IHttpResult } from "../interfaces";
import { THttpStatusCode } from "../types";

export const textResult = (text: string, statusCode?: THttpStatusCode) => {
    return {
        contentType: MIME_TYPE.Text,
        responseData: text,
        statusCode: statusCode || HTTP_STATUS_CODE.Ok,
        type: HTTP_RESULT_TYPE.Default
    } as IHttpResult;
};