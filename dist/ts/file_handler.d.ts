import { RequestHandlerHelper } from "./request_handler_helper";
export declare class FileHandler extends RequestHandlerHelper {
    private getRequiredFolder_;
    protected handleFileRequest(filePath: string, fileType: string): void;
    private sendFile_;
}
