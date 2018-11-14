
import { MIME_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { ActionResult } from "../types/action_result";

export function jsonResult(value: any) {
    return {
        contentType: MIME_TYPE.Json,
        responseData: JSON.stringify(value),
        statusCode: HTTP_STATUS_CODE.Ok
    } as ActionResult;
}