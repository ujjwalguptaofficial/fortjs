import { RequestHandlerHelper } from "./request_handler_helper";
export declare class FileHandler extends RequestHandlerHelper {
    private getRequiredFolder_;
    private getFileStats_;
    protected handleFileRequest(filePath: string, fileType: string): Promise<void>;
    private isClientHasFreshFile_;
    private sendFile_;
}
