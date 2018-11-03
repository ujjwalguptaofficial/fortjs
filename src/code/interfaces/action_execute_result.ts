import { HTTP_STATUS_CODE } from "../enums";

export interface IActionExecuteResult {
    statusCode: HTTP_STATUS_CODE;
    responseData: any;
    contentType: string;
}