
import { HTTP_RESULT_TYPE, HTTP_STATUS_CODE } from "../enums";
import { IHttpResult } from "../interfaces";
import { HttpFormatResult } from "../types";

export const multiFormatResult = (value: HttpFormatResult, statusCode?: HTTP_STATUS_CODE) => {
    return {
        responseData: value,
        statusCode: statusCode || HTTP_STATUS_CODE.Ok,
        type: HTTP_RESULT_TYPE.FormattedResult
    } as IHttpResult;
};