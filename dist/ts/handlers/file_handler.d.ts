/// <reference types="node" />
import { RequestHandlerHelper } from "./request_handler_helper";
import * as Fs from "fs";
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
    private handleFileRequestForFolderPath_;
    private isClientHasFreshFile_;
    private sendFileAsResponse_;
    private getMimeTypeFromFileType_;
    sendFile_: (filePath: string, fileType: string, fileInfo: Fs.Stats) => any;
}
