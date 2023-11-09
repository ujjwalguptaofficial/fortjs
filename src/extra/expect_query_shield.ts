import { Shield } from "../abstracts";
import { RouteHandler } from "../handlers";
import { executeValidate } from "./validate_body_guard";

export class ValidateQueryShield extends Shield {
    async protect() {
        const expectedQuery = RouteHandler.getExpectedQuery(this['componentProp_'].controllerName, this.workerName);
        if (expectedQuery == null) return;
        const validationResult = await executeValidate(expectedQuery, this.query);
        if (validationResult.error) {
            return validationResult.error;
        }
        this['componentProp_'].query = validationResult.model;
    }
}