import { HttpResult } from "../types";

export interface IDtoValidator {
    validate(dtoInstance: any): Promise<any>;
    getErrorResult(error: any): HttpResult;
}