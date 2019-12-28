import { HttpResult, HttpFormatResult } from "../types";
import { FileHandler } from "./file_handler";
export declare class ControllerResultHandler extends FileHandler {
    private controllerResult_;
    private getDataBasedOnMimeType_;
    private endResponse_;
    private handleRedirectResult_;
    private handleFormatResult_;
    private handleFileResult_;
    onTerminationFromWall(result: HttpResult | HttpFormatResult): void;
    private isRedirectFalse_;
    private handleFinalResult_;
    onResultFromController(result: HttpResult | HttpFormatResult): Promise<void>;
}
