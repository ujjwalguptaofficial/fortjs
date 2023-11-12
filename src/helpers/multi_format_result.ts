
import { HTTP_RESULT_TYPE, MIME_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { IHttpFormatResult, IHttpResult } from "../interfaces";

export const multiTypeResult = (value: IHttpFormatResult, statusCode?: HTTP_STATUS_CODE) => {
    return {
        responseData: value,
        statusCode: statusCode || HTTP_STATUS_CODE.Ok,
        type: HTTP_RESULT_TYPE.FormattedResult
    } as IHttpResult;
};