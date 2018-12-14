import { HttpResult } from "./types/http_result";
import { FileHandler } from "./file_handler";
import { HttpFormatResult } from "./types";
export declare class ControllerHandler extends FileHandler {
    private controllerResult_;
    private getDataBasedOnMimeType_;
    private finishResponse_;
    private handleRedirectResult_;
    private handleFormatResult_;
    private handleFileResult_;
    onResultEvaluated(result: HttpResult | HttpFormatResult): Promise<void>;
}
