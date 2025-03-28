import { Component } from "../abstracts/component";
import { HTTP_RESULT_TYPE, HTTP_STATUS_CODE, MIME_TYPE } from "../enums";
import { IComponentProp } from "./component_prop";

export interface IHttpResult {
    statusCode: HTTP_STATUS_CODE | number;
    responseData: any;
    contentType: MIME_TYPE;
    type: HTTP_RESULT_TYPE;
    custom?: ({ onNotFound }) => void;
}
export class CustomResultOption extends Component {
    constructor(componentProps: IComponentProp) {
        super();
        this['componentProp_'] = componentProps;
    }
}

export type T_CUSTOM_RESULT = (option?: CustomResultOption) => Promise<IHttpResult | null>;

export const customResult = (resultEvaluator: (option?: CustomResultOption) => void) => {
    return {
        statusCode: HTTP_STATUS_CODE.Ok,
        type: HTTP_RESULT_TYPE.Custom,
        responseData: resultEvaluator,
    } as IHttpResult;
};
