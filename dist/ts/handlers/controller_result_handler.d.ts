import { HttpResult, HttpFormatResult } from "../types";
import { FileHandler } from "./file_handler";
export declare class ControllerResultHandler extends FileHandler {
    private handleRedirectResult_;
    private handleFileResult_;
    onTerminationFromWall(result: HttpResult | HttpFormatResult): void;
    private handleFinalResult_;
    onResultFromController(result: HttpResult | HttpFormatResult): Promise<void>;
}
