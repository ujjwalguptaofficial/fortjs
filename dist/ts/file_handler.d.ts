import { RequestHandlerHelper } from "./request_handler_helper";
export declare class FileHandler extends RequestHandlerHelper {
    private getRequiredFolder_;
    private getFileStats_;
    protected handleFileRequestFromAbsolutePath(absolutePath: string, fileType: string): Promise<any>;
    protected handleFileRequest(filePath: string, fileType: string): void;
    /**
     * process folders handling asuuming path is folder.
     * Please check whether the file is folder before calling this function
     *
     * @private
     * @param {string} filePath
     * @param {Fs.Stats} fileInfo
     * @returns
     * @memberof FileHandler
     */
    private handleFileRequestForFolder_;
    protected handleFileRequestForFolder(filePath: string): Promise<any>;
    private isClientHasFreshFile_;
    private sendFile_;
}
