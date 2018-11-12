import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { MIME_TYPE } from "../enums/mime_type";

export interface IActionResult {
    statusCode: HTTP_STATUS_CODE;
    responseData: any;
    contentType: MIME_TYPE;
}