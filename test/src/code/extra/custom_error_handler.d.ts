import { ErrorHandler } from "fortjs";
export declare class CustomErrorHandler extends ErrorHandler {
    onForbiddenRequest(): Promise<string>;
}
