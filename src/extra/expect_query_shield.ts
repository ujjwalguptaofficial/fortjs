import { Shield } from "../abstracts";
import { HTTP_STATUS_CODE } from "../enums";
import { compareExpectedAndRemoveUnnecessary, textResult } from "../helpers";
import { RouteHandler } from "../handlers";

export class ExpectQueryShield extends Shield {
    async protect() {
        const expectedQuery = RouteHandler.getExpectedQuery(this['componentProp_'].controllerName, this.workerName);
        if (expectedQuery != null) {
            const query = compareExpectedAndRemoveUnnecessary(expectedQuery, this.query, true);
            if (query == null) {
                return textResult(
                    "Bad query string data - query string data does not match with expected value"
                    ,
                    HTTP_STATUS_CODE.BadRequest
                );
            }
            this['componentProp_'].query = query;
        }
    }
}