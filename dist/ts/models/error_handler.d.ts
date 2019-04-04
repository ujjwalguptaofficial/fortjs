import { IException } from "../interfaces";
export declare class ErrorHandler {
    onServerError(ex: IException): Promise<string>;
    onBadRequest(ex: IException): Promise<string>;
    onForbiddenRequest(): Promise<string>;
    onNotAcceptableRequest(): Promise<string>;
    onMethodNotAllowed(): Promise<string>;
    onNotFound(url: string): Promise<string>;
}
