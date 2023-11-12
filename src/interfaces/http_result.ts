import { HTTP_RESULT_TYPE, HTTP_STATUS_CODE, MIME_TYPE } from "../enums";

export type IHttpResult = {
    statusCode: HTTP_STATUS_CODE;
    responseData: any;
    contentType: MIME_TYPE;
    type: HTTP_RESULT_TYPE;
};

