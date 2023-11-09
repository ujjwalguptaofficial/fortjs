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