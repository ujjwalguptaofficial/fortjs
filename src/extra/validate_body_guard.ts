import { Guard } from "../abstracts";
import { RouteHandler } from "../handlers";
import { FORT_GLOBAL } from "../constants";

export const executeValidate = async (dtoClass, data) => {
    const validator = FORT_GLOBAL.validator;
    const dtoInstance = new dtoClass(data);
    if (Object.keys(dtoInstance).length === 0) {
        Object.assign(dtoInstance, data);
    }

    const validationResult = await validator.validate(
        dtoInstance
    );
    if (validationResult) {
        return {
            error: validator.getErrorResult(validationResult)
        }
    }
    return {
        model: dtoInstance
    }
}

export class ValidateBodyGuard extends Guard {
    async check() {
        const expectedBody = RouteHandler.getExpectedBody(this['componentProp_'].controllerName, this.workerName);
        if (expectedBody == null) return;
        const validationResult = await executeValidate(expectedBody, this.body);
        if (validationResult.error) {
            return validationResult.error;
        }
        this['componentProp_'].body = validationResult.model;
    }
}