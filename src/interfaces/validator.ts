import { IHttpResult } from "./http_result";

export interface IDtoValidator {
    validate(dtoInstance: any): Promise<any>;
    getErrorResult(error: any): IHttpResult;
}