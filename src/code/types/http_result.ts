import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { MIME_TYPE } from "../enums/mime_type";
import { FileResultInfo } from "./file_result_info";


export type HttpResult = {
    statusCode: HTTP_STATUS_CODE;
    responseData: any;
    contentType: MIME_TYPE;
    file?: FileResultInfo;
    responseFormat?: {
        [type: string]: () => any;
    },
    shouldRedirect?: boolean;
};

