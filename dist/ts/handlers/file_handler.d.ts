import { MIME_TYPE } from "../enums";
import { RequestHandlerHelper } from "./request_handler_helper";
export declare class FileHandler extends RequestHandlerHelper {
    private getFileInfoFromUrl_;
    private getFileStats_;
    protected handleFileRequestFromAbsolutePath(absolutePath: string, fileType: string): void;
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
    private handleFileRequestForPath_;
    private isClientHasFreshFile_;
    private sendFile_;
    sendFileAsResponse_(filePath: string, mimeType: MIME_TYPE): void;
}
