import { RequestHandlerHelper } from "./request_handler_helper";
export declare class FileHandler extends RequestHandlerHelper {
    private getFileInfoFromUrl_;
    private getFileStats_;
    protected handleFileRequestFromAbsolutePath(absolutePath: string, fileType: string): Promise<any>;
    private checkForFolderAllowAndReturnPath_;
    protected handleFileRequest(urlPath: string): void;
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
    protected handleFileRequestForFolder(urlPath: string): Promise<void>;
    private isClientHasFreshFile_;
    private sendFile_;
}
