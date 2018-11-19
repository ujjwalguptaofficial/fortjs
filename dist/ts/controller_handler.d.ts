import { HttpResult } from "./types/http_result";
import { FileHandler } from "./file_handler";
import { Wall } from "./abstracts/wall";
export declare class ControllerHandler extends FileHandler {
    protected wallInstances: Wall[];
    private controllerResult_;
    private getDataBasedOnMimeType_;
    private runWallOutgoing_;
    onControllerResult(result: HttpResult): void;
}
