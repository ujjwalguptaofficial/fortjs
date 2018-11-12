import { IActionResult } from "../interfaces/action_result";
import { MIME_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";

export function textResult(text: string) {
    return {
        contentType: MIME_TYPE.Text,
        responseData: text,
        statusCode: HTTP_STATUS_CODE.Ok
    } as IActionResult;
}