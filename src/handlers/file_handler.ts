import { HTTP_STATUS_CODE, MIME_TYPE, ETAG_TYPE } from "../enums";
import { FortGlobal } from "../fort_global";
import * as path from "path";
import { CONTENT_TYPE } from "../constant";
import { RequestHandlerHelper } from "./request_handler_helper";
import * as Fs from "fs";
import { getMimeTypeFromFileType, promise } from "../helpers";
import * as etag from "etag";
import * as fresh from "fresh";
import { isNullOrEmpty } from "../utils";

type FileInfo = {
    folder: string,
    file: string;
};
export class FileHandler extends RequestHandlerHelper {

    private getFileInfoFromUrl_(urlPath: string) {
        const splittedValue = urlPath.split("/");
        const fileInfo = {
            file: ""
        } as FileInfo;
        if (splittedValue.length > 2 || !isNullOrEmpty(path.parse(urlPath).ext)) {
            fileInfo.folder = splittedValue[1];
            fileInfo.file = splittedValue.splice(2).join("/");
            return fileInfo;
        }
        fileInfo.folder = splittedValue[1];
        return fileInfo;

    }

    private getFileStats_(filePath) {
        return promise<Fs.Stats>((res, rej) => {
            // eslint-disable-next-line
            Fs.lstat(filePath, (err, status) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        res(null);
                    }
                    else {
                        rej(err);
                    }
                }
                else {
                    res(status);
                }
            });
        });
    }

    protected handleFileRequestFromAbsolutePath(absolutePath: string, fileType: string) {
        return this.getFileStats_(absolutePath).then(fileInfo => {
            if (fileInfo != null) {
                if (fileInfo.isDirectory() === true) {
                    return this.handleFileRequestForFolderPath_(absolutePath);
                }
                else {
                    return this.sendFile_(absolutePath, fileType, fileInfo);

                }
            }
            else {
                return this.onNotFound();
            }
        });
    }

    private checkForFolderAllowAndReturnPath_(urlPath: string) {
        const fileInfo = this.getFileInfoFromUrl_(urlPath);
        const getAbsPath = function () {
            const folder = FortGlobal.folders.find(qry => qry.alias === fileInfo.folder);
            if (folder != null) {
                return path.join(folder.path, fileInfo.file);
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

    protected handleFileRequest(urlPath: string) {
        const extension = path.parse(urlPath).ext;
        const absFilePath = this.checkForFolderAllowAndReturnPath_(urlPath);
        if (absFilePath != null) {
            return this.handleFileRequestFromAbsolutePath(absFilePath, extension);
        }
        else {
            return this.onNotFound();
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
    private handleFileRequestForFolderPath_(absolutePath: string) {
        absolutePath = path.join(absolutePath, "index.html");
        return this.getFileStats_(absolutePath).then(fileInfo => {
            return fileInfo != null ?
                this.sendFile_(absolutePath, MIME_TYPE.Html, fileInfo) :
                this.onNotFound();
        });
    }

    protected isClientHasFreshFile(lastModified: string, etagValue: string) {
        return fresh(this.request.headers, {
            'etag': etagValue,
            'last-modified': lastModified
        });
    }

    protected sendFileAsResponse(filePath: string, mimeType: MIME_TYPE) {
        this.response.writeHead(HTTP_STATUS_CODE.Ok, {
            [CONTENT_TYPE]: mimeType
        });
        const readStream = Fs.createReadStream(filePath);
        // Handle non-existent file
        readStream.on('error', this.onErrorOccured.bind(this));
        readStream.on('open', () => {
            readStream.pipe(this.response);
        });
    }

    sendFile_(filePath: string, fileType: string, fileInfo: Fs.Stats) {
        const lastModified = fileInfo.mtime.toUTCString();
        const eTagValue = etag(fileInfo, {
            weak: FortGlobal.eTag.type === ETAG_TYPE.Weak
        });
        const response = this.response;
        if (this.isClientHasFreshFile(lastModified, eTagValue)) { // client has fresh file
            response.statusCode = HTTP_STATUS_CODE.NotModified;
            response.end();
        }
        else {
            response.setHeader('Etag', eTagValue);
            response.setHeader('Last-Modified', lastModified);
            this.sendFileAsResponse(filePath, getMimeTypeFromFileType(fileType));
        }
    }
}