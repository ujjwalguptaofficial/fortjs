import { Shield } from "../abstracts";
import { RouteHandler } from "../handlers";
import { executeValidate } from "./validate_body_guard";

export class ValidateQueryShield extends Shield {
    async protect() {
        const expectedQuery = RouteHandler.getExpectedQuery(this['componentProp_'].controllerName, this.workerName);
        if (expectedQuery == null) return;
        return executeValidate(expectedQuery, this.query);
    }
}