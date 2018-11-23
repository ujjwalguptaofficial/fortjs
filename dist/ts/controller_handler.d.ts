import { HttpResult } from "./types/http_result";
import { FileHandler } from "./file_handler";
export declare class ControllerHandler extends FileHandler {
    private controllerResult_;
    private getDataBasedOnMimeType_;
    private finishResponse_;
    onResultEvaluated(result: HttpResult): Promise<void>;
}
