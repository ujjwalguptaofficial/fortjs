import { Guard } from "../abstracts";
import { executeValidate } from "./execute_validate";

export class ValidateBodyGuard extends Guard {
    async check() {
        const componentProp = this['componentProp_'];
        const expectedBody = componentProp.workerInfo.expectedBody;
        if (expectedBody == null) return;
        const validationResult = await executeValidate(expectedBody, this.body);
        if (validationResult.error) {
            return validationResult.error;
        }
        componentProp.body = validationResult.model;
    }
}