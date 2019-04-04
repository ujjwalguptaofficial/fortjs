import { HTTP_STATUS_CODE } from "../enums";

export type HttpFormatResult = {
    statusCode: HTTP_STATUS_CODE;
    responseFormat?: {
        [type: string]: () => any;
    }
};
