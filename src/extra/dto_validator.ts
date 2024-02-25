import { ValidatorOptions, validate } from "class-validator";
import { IDTOValidator } from "../interfaces";
import { ErrorResultMapper } from "../types";
import { jsonResult } from "../helpers";
import { HTTP_STATUS_CODE } from "../enums";

const defaultErrorResultMapper = (validationResult) => {
    return jsonResult({
        error: {
            message: validationResult,
            type: "ValidationError",
        }
    }, HTTP_STATUS_CODE.BadRequest);
};

export class DtoValidator implements IDTOValidator {

    validatorOption: ValidatorOptions;
    getErrorResult: ErrorResultMapper;

    constructor(validatorOption: ValidatorOptions = null, errorResultMapper: ErrorResultMapper = defaultErrorResultMapper) {
        // const defaultValidatorOption = {
        //     // whitelist: true,
        //     // forbidNonWhitelisted: true,
        //     // forbidUnknownValues: false
        // } as ValidatorOptions;
        this.validatorOption = validatorOption;
        // Object.assign(defaultValidatorOption, validatorOption);
        this.validatorOption = validatorOption;
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