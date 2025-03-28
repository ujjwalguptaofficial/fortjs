import { Component } from "../abstracts/component";
import { HTTP_RESULT_TYPE } from "../enums";
import { IComponentProp, IHttpResult } from "../interfaces";

export class CustomResultOption extends Component {
    constructor(componentProps: IComponentProp) {
        super();
        this['componentProp_'] = componentProps;
    }
}

export type T_CUSTOM_RESULT = (option?: CustomResultOption) => Promise<IHttpResult | null>;

export const customResult = (resultEvaluator: (option?: CustomResultOption) => void) => {
    return {
        type: HTTP_RESULT_TYPE.Custom,
        responseData: resultEvaluator,
    } as IHttpResult;
};
