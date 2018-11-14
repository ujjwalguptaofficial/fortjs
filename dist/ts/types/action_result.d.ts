import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { MIME_TYPE } from "../enums/mime_type";
export declare type ActionResult = {
    statusCode: HTTP_STATUS_CODE;
    responseData: any;
    contentType: MIME_TYPE;
};
