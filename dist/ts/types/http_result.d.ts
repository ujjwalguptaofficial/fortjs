import { HTTP_STATUS_CODE, MIME_TYPE } from "../enums";
import { FileResultInfo } from ".";
export declare type HttpResult = {
    statusCode: HTTP_STATUS_CODE;
    responseData: any;
    contentType: MIME_TYPE;
    file?: FileResultInfo;
    shouldRedirect?: boolean;
};
