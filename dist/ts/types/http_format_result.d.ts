import { HTTP_STATUS_CODE } from "../enums";
export declare type HttpFormatResult = {
    statusCode: HTTP_STATUS_CODE;
    responseFormat?: {
        [type: string]: () => any;
    };
};
