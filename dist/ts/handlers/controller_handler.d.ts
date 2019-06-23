import { HttpResult, HttpFormatResult } from "../types";
import { FileHandler } from "./file_handler";
export declare class ControllerHandler extends FileHandler {
    private controllerResult_;
    private getDataBasedOnMimeType_;
    private endResponse_;
    private handleRedirectResult_;
    private handleFormatResult_;
    private handleFileResult_;
    onResultFromWall(result: HttpResult | HttpFormatResult): void;
    private handleResponseResult_;
    onResultEvaluated(result: HttpResult | HttpFormatResult): Promise<void>;
}
