import { IDTOValidator } from "../interfaces";

export const executeValidate = async (validator: IDTOValidator, dtoClass, data) => {
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