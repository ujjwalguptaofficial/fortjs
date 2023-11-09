import { Shield } from "../abstracts";
import { RouteHandler } from "../handlers";
import { executeValidate } from "./execute_validate";

export class ValidateQueryShield extends Shield {
    async protect() {
        const componentProp = this['componentProp_'];
        const expectedQuery = RouteHandler.getExpectedQuery(componentProp.controllerName, this.workerName);
        if (expectedQuery == null) return;
        const validationResult = await executeValidate(expectedQuery, this.query);
        if (validationResult.error) {
            return validationResult.error;
        }
        componentProp.query = validationResult.model;
    }
}