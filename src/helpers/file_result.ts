
import { HTTP_RESULT_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { IHttpResult } from "../interfaces";
import { FileResultInfo } from "../types";

export const fileResult = (filePath: string) => {
    return {
        statusCode: HTTP_STATUS_CODE.Ok,
        responseData: {
            filePath: filePath
        } as FileResultInfo,
        type: HTTP_RESULT_TYPE.File
    } as IHttpResult;
};