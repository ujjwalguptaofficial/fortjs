import { ValidatorOptions, validate } from "class-validator";
import { IDtoValidator } from "../interfaces";
import { ErrorResultMapper } from "../types";
import { jsonResult } from "../helpers";
import { HTTP_STATUS_CODE } from "../enums";

const defaultErrorResultMapper = (validationResult) => {
    return jsonResult({
        error: {
            message: validationResult,
            type: "ValidationError",
        }
    }, HTTP_STATUS_CODE.BadRequest)
};

export class DtoValidator implements IDtoValidator {

    validatorOption: ValidatorOptions;
    getErrorResult: ErrorResultMapper;

    constructor(validatorOption: ValidatorOptions = {}, errorResultMapper: ErrorResultMapper = defaultErrorResultMapper) {
        const defaultValidatorOption = {
            whitelist: true,
            forbidNonWhitelisted: true,
            forbidUnknownValues: true
        } as ValidatorOptions;
        this.validatorOption = Object.assign(defaultValidatorOption, validatorOption);
        this.getErrorResult = errorResultMapper;
    }

    async validate(dtoInstance: any) {
        const errors = await validate(dtoInstance, this.validatorOption);
        if (errors.length > 0) {
            const error = errors[0]
            const constraint = Object.keys(error.constraints)[0]
            const errMessage = error.constraints[constraint]
            if (error) {
                return errMessage;
            }
        }
    }
}