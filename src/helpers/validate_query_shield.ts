import { Shield } from "../abstracts";
import { executeValidate } from "./execute_validate";

export class ValidateQueryShield extends Shield {
    async protect() {
        const componentProp = this['componentProp_'];
        const expectedQuery = componentProp.workerInfo.expectedQuery;
        if (expectedQuery == null) return;
        const validationResult = await executeValidate(expectedQuery, this.query);
        if (validationResult.error) {
            return validationResult.error;
        }
        componentProp.query = validationResult.model;
    }
}