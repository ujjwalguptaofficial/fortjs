
import { HTTP_RESULT_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { IHttpResult } from "../interfaces";

export const downloadResult = (filePath: string, downloadFileName?: string) => {
    return {
        statusCode: HTTP_STATUS_CODE.Ok,
        responseData: {
            filePath: filePath,
            shouldDownload: true,
            alias: downloadFileName
        },
        type: HTTP_RESULT_TYPE.File
    } as IHttpResult;
};