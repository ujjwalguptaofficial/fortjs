import { IException } from "../interfaces/exception";
export declare class ErrorHandler {
    onServerError(ex: IException): Promise<string>;
    onForbiddenRequest(): Promise<string>;
}
