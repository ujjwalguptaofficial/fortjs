import { HTTP_STATUS_CODE } from "../enums";

export interface IActionExecuteResult {
    statusCode: HTTP_STATUS_CODE;
    responseData: string|Buffer
    contentType: string;
}