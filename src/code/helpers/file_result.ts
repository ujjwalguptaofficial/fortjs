
import { MIME_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { HttpResult } from "../types/http_result";

export function fileResult(filePath: string, type: MIME_TYPE) {
    return {
        contentType: type,
        statusCode: HTTP_STATUS_CODE.Ok,
        file: {
            filePath: filePath
        }
    } as HttpResult;
}