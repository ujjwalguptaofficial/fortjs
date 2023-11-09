import { Guard } from "../abstracts";
import { RouteHandler } from "../handlers";
import { FORT_GLOBAL } from "../constants";
import 'reflect-metadata';
import { plainToInstance } from "class-transformer";

export const executeValidate = async (dtoClass, data) => {
    const validator = FORT_GLOBAL.validator;
    const dtoInstance = plainToInstance(dtoClass, data);
    const validationResult = await validator.validate(
        dtoInstance
    );
    if (validationResult) {
        return validator.getErrorResult(validationResult);
    }
}

export class ValidateBodyGuard extends Guard {
    async check() {
        const expectedBody = RouteHandler.getExpectedBody(this['componentProp_'].controllerName, this.workerName);
        if (expectedBody == null) return;
        return executeValidate(expectedBody, this.body);
    }
}