
import { MIME_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { HttpResult } from "../types/http_result";

export function downloadResult(filePath: string, downloadFileName?: string) {
    return {
        statusCode: HTTP_STATUS_CODE.Ok,
        file: {
            filePath: filePath,
            shouldDownload: true,
            alias: downloadFileName
        }
    } as HttpResult;
}