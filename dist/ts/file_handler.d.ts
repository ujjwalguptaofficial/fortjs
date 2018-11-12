import { IActionResult } from "./interfaces/action_result";
export declare class FileHandler {
    extension: string;
    relativeFilePath: string;
    constructor(filePath: string, extension: string);
    private getRequiredFolder_;
    execute(): Promise<IActionResult>;
}
