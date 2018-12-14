import { HTTP_STATUS_CODE } from "../enums/http_status_code";

export type HttpFormatResult = {
    statusCode: HTTP_STATUS_CODE;
    responseFormat?: {
        [type: string]: () => any;
    }
};
