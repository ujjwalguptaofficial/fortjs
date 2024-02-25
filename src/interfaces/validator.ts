import { IHttpResult } from "./http_result";

export interface IDTOValidator {
    validate(dtoInstance: any): Promise<any>;
    getErrorResult(error: any): IHttpResult;
}