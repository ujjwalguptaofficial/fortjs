import { Guard } from "../abstracts";
import { executeValidate } from "./execute_validate";

export class ValidateParamGuard extends Guard {
    async check() {
        const componentProp = this['componentProp_'];
        const expectedValue = componentProp.workerInfo.expectedParam;
        if (expectedValue == null) return;
        const validationResult = await executeValidate(expectedValue, this.param);
        if (validationResult.error) {
            return validationResult.error;
        }
        componentProp.param = validationResult.model;
    }
}