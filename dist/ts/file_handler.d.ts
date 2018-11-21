import { RequestHandlerHelper } from "./request_handler_helper";
export declare class FileHandler extends RequestHandlerHelper {
    private getRequiredFolder_;
    private getFileStats_;
    protected handleFileRequest(filePath: string, fileType: string): Promise<any>;
    /**
     * process folders handling asuuming path is folder.
     * Please check whether the file is folder before calling this function
     *
     * @private
     * @param {string} filePath
     * @param {string} folderRequired
     * @param {Fs.Stats} fileInfo
     * @memberof FileHandler
     */
    private handleFileRequestForFolder_;
    protected handleFileRequestForFolder(filePath: string): Promise<any>;
    private isClientHasFreshFile_;
    private sendFile_;
}
