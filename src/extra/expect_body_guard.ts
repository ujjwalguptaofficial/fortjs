import { Guard } from "../abstracts";
import { HTTP_STATUS_CODE } from "../enums";
import { compareExpectedAndRemoveUnnecessary, textResult } from "../helpers";
import { RouteHandler } from "../handlers";

export class ExpectBodyGuard extends Guard {
    async check() {
        const expectedBody = RouteHandler.getExpectedBody(this['componentProp_'].controllerName, this.workerName);
        if (expectedBody != null) {
            const body = compareExpectedAndRemoveUnnecessary(expectedBody, this.body, false);
            if (body == null) {
                return textResult(
                    "Bad body data - body data does not match with expected value"
                    , HTTP_STATUS_CODE.BadRequest
                );
            }
            this['componentProp_'].body = body;
        }
    }
}