
import { HTTP_RESULT_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { IHttpResult } from "../interfaces";
import { HttpFormatResult } from "../types";

export const multiTypeResult = (value: HttpFormatResult, statusCode?: HTTP_STATUS_CODE) => {
    return {
        responseData: value,
        statusCode: statusCode || HTTP_STATUS_CODE.Ok,
        type: HTTP_RESULT_TYPE.FormattedResult
    } as IHttpResult;
};