import { HTTP_RESULT_TYPE, HTTP_STATUS_CODE, MIME_TYPE } from "../enums";

export interface IHttpResult {
    statusCode: HTTP_STATUS_CODE | number;
    responseData: any;
    contentType: MIME_TYPE;
    type: HTTP_RESULT_TYPE;
    custom?: ({ onNotFound }) => void;
}

export interface ICustomResultOption {
    onNotFound: () => void;
}

export const customResult = (resultEvaluator: (option?: ICustomResultOption) => void) => {
    return {
        statusCode: HTTP_STATUS_CODE.Ok,
        type: HTTP_RESULT_TYPE.Custom,
        responseData: resultEvaluator,
    } as IHttpResult;
};
