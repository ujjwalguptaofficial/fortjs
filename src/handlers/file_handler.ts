import { HTTP_STATUS_CODE, MIME_TYPE, ETAG_TYPE } from "../enums";
import * as path from "path";
import { CONTENT_TYPE } from "../constants";
import * as Fs from "fs";
import { lstat } from "fs/promises";
import { customResult, getMimeTypeFromExtension, promise } from "../helpers";
import * as etag from "etag";
import * as fresh from "fresh";
import { isNullOrEmpty } from "../utils";
import { IComponentProp, IFileResultInfo } from "../interfaces";
import { handleFileResult } from "./handle_file_result";
import { pipeline } from "stream/promises";
import { createReadStream } from "fs";

interface IFileInfo {
    folder: string,
    file: string;
}

async function getFileStats_(filePath: string): Promise<Fs.Stats | null> {
    try {
        return await lstat(filePath);
    } catch (err: any) {
        if (err.code === 'ENOENT') {
            return null;
        }
        throw err;
    }
}

export class FileHandler {

    constructor(private option: IComponentProp) {

    }

    private getFileInfoFromUrl_(url: string) {
        // normalize early
        const normalizedPath = path.posix.normalize(url); // use posix to handle forward
        const splittedValue = normalizedPath.split("/");
        const fileInfo = {
            file: ""
        } as IFileInfo;
        if (splittedValue.length > 2 || !isNullOrEmpty(path.parse(normalizedPath).ext)) {
            fileInfo.folder = splittedValue[1];
            fileInfo.file = splittedValue.splice(2).join("/");
            return fileInfo;
        }
        fileInfo.folder = splittedValue[1];
        return fileInfo;

    }

    async getFileResultFromAbsolutePath(absolutePath: string) {
        const fileInfo = await getFileStats_(absolutePath);
        if (fileInfo != null) {
            if (fileInfo.isDirectory() === true) {
                return this.getFileResultForFolderPath_(absolutePath);
            }
            else {
                return this.getFile_(absolutePath, fileInfo);
            }
        }
    }

    private checkForFolderAllowAndReturnPath_(urlPath: string) {
        const fileInfo = this.getFileInfoFromUrl_(urlPath);
        const getAbsPath = () => {
            const folder = this.option.global['folders_'].find(qry => qry.alias === fileInfo.folder);
            if (folder != null) {
                const absPath = path.join(folder.path, fileInfo.file);
                const normalized = path.normalize(absPath);

                // Security check: ensure path is inside allowed folder
                if (!normalized.startsWith(folder.path)) {
                    return null; // prevent path traversal
                }
                return normalized;
            }
            return null;
        };
        let absPath = getAbsPath();
        if (absPath == null) {
            fileInfo.folder = "/";
            fileInfo.file = urlPath;
            absPath = getAbsPath();
        }
        return absPath;
    }

    async handleFileRequest(urlPath: string) {
        const absFilePath = this.checkForFolderAllowAndReturnPath_(urlPath);
        if (absFilePath != null) {
            const filePathInfo = await this.getFileResultFromAbsolutePath(absFilePath);
            if (filePathInfo) {
                return customResult(handleFileResult(filePathInfo));
            }
        }
    }

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
    private async getFileResultForFolderPath_(absolutePath: string) {
        absolutePath = path.join(absolutePath, "index.html");
        const fileInfo = await getFileStats_(absolutePath);
        return fileInfo != null ?
            this.getFile_(absolutePath, fileInfo) :
            null;
    }

    protected isClientHasFreshFile(lastModified: string, etagValue: string) {
        return fresh(this.option.request.headers, {
            'etag': etagValue,
            'last-modified': lastModified
        });
    }

    private async sendFileAsResponse_(filePath: string, mimeType: MIME_TYPE): Promise<void> {
        const handler = this.option;
        const { response } = handler;

        if (handler.isResponseFinished()) {
            return;
        }

        response.writeHead(HTTP_STATUS_CODE.Ok, {
            [CONTENT_TYPE]: mimeType
        });

        const readStream = createReadStream(filePath);

        try {
            // pipeline automatically pipes and cleans up streams on error or close
            await pipeline(readStream, response);
        } catch (err: any) {
            // If client aborted/disconnected early, pipeline throws an error (ERR_STREAM_PREMATURE_CLOSE)
            // You can safely ignore client disconnects, but rethrow other unexpected errors
            if (err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
                throw err;
            }
        }
    }

    async send(filePathInfo: IFileResultInfo) {
        const option = this.option;
        if (option.isResponseFinished()) {
            if (process.env.NODE_ENV !== 'production') {
                console.warn("FileHandler.send called after response was already sent/ended");
            }
            return;
        }
        const response = option.response;
        const { fileInfo, filePath } = filePathInfo;
        const lastModified = fileInfo.mtime.toUTCString();
        const eTagValue = etag(fileInfo, {
            weak: option.global.eTag.type === ETAG_TYPE.Weak
        });
        response.setHeader('Etag', eTagValue);
        const extension = path.parse(filePath).ext;
        const contentType = response.getHeader(CONTENT_TYPE);
        const mimeType = contentType ?
            contentType as MIME_TYPE :
            getMimeTypeFromExtension(extension);
        if (this.isClientHasFreshFile(lastModified, eTagValue)) { // client has fresh file
            response.statusCode = HTTP_STATUS_CODE.NotModified;
            response.end();
        }
        else {
            response.setHeader('Last-Modified', lastModified);
            return this.sendFileAsResponse_(filePath, mimeType);
        }
    }

    private getFile_(filePath: string, fileInfo: Fs.Stats) {
        return {
            filePath: filePath,
            fileInfo: fileInfo
        } as IFileResultInfo;
    }
}
