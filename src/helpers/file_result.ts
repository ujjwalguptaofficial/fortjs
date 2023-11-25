
import { HTTP_RESULT_TYPE, HTTP_STATUS_CODE } from "../enums";
import { IHttpResult, IFileResultInfo } from "../interfaces";

export const fileResult = (filePath: string) => {
    return {
        statusCode: HTTP_STATUS_CODE.Ok,
        responseData: {
            filePath: filePath
        } as IFileResultInfo,
        type: HTTP_RESULT_TYPE.File
    } as IHttpResult;
};