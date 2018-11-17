
import { MIME_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { HttpResult } from "../types/http_result";

export function jsonResult(value: any, statusCode?: HTTP_STATUS_CODE) {
    return {
        contentType: MIME_TYPE.Json,
        responseData: value,
        statusCode: statusCode || HTTP_STATUS_CODE.Ok
    } as HttpResult;
}