import { MIME_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { HttpResult } from "../types/http_result";

export const textResult = (text: string, statusCode?: HTTP_STATUS_CODE) => {
    return {
        contentType: MIME_TYPE.Text,
        responseData: text,
        statusCode: statusCode || HTTP_STATUS_CODE.Ok
    } as HttpResult;
};