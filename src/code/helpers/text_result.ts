import { MIME_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { ActionResult } from "../types/action_result";

export function textResult(text: string) {
    return {
        contentType: MIME_TYPE.Text,
        responseData: text,
        statusCode: HTTP_STATUS_CODE.Ok
    } as ActionResult;
}