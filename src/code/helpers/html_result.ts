import { MIME_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { HttpResult } from "../types/http_result";

export function htmlResult(html: string) {
    return {
        contentType: MIME_TYPE.Html,
        responseData: html,
        statusCode: HTTP_STATUS_CODE.Ok
    } as HttpResult;
}