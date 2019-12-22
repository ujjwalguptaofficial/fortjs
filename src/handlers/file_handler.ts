import { HTTP_STATUS_CODE, MIME_TYPE, ETag_Type } from "../enums";
import { FortGlobal } from "../fort_global";
import * as path from "path";
import { __ContentType } from "../constant";
import { RequestHandlerHelper } from "./request_handler_helper";
import * as Fs from "fs";
import { getMimeTypeFromExtension, promise, isEnvProduction } from "../helpers";
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
        this.getFileStats_(absolutePath).then(fileInfo => {
            if (fileInfo != null) {
                if (fileInfo.isDirectory() === true) {
                    this.handleFileRequestForPath_(absolutePath);
                }
                else {
                    this.sendFile_(absolutePath, fileType, fileInfo);
                }
            }
            else {
                this.onNotFound();
            }
        }).catch(ex => {
            this.onErrorOccured(ex);
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
            this.handleFileRequestFromAbsolutePath(absFilePath, extension);
        }
        else {
            this.onNotFound();
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
    private handleFileRequestForPath_(absolutePath: string) {

        absolutePath = path.join(absolutePath, "index.html");
        this.getFileStats_(absolutePath).then(fileInfo => {
            if (fileInfo != null) {
                const fileType = MIME_TYPE.Html;
                this.sendFile_(absolutePath, fileType, fileInfo);
            }
            else {
                this.onNotFound();
            }
        }).catch(ex => {
            this.onErrorOccured(ex);
        });
    }

    private isClientHasFreshFile_(lastModified: string, etagValue: string) {
        return fresh(this.request.headers, {
            'etag': etagValue,
            'last-modified': lastModified
        });
    }

    private sendFile_(filePath: string, fileType: string, fileInfo: Fs.Stats) {
        this.runWallOutgoing().then(() => {
            let mimeType;
            if (fileType[0] === '.') { // its extension
                mimeType = getMimeTypeFromExtension(fileType);
            }
            else { // mime type
                mimeType = fileType;
            }
            const negotiateMimeType = this.getContentTypeFromNegotiation(mimeType) as MIME_TYPE;
            if (negotiateMimeType != null) {
                if (isEnvProduction()) {
                    const lastModified = fileInfo.mtime.toUTCString();
                    const eTagValue = etag(fileInfo, {
                        weak: FortGlobal.eTag.type === ETag_Type.Weak
                    });
                    if (this.isClientHasFreshFile_(lastModified, eTagValue)) { // client has fresh file
                        this.response.statusCode = HTTP_STATUS_CODE.NotModified;
                        this.response.end();
                    }
                    else {
                        this.response.writeHead(HTTP_STATUS_CODE.Ok, {
                            [__ContentType]: mimeType,
                            'Etag': eTagValue,
                            'Last-Modified': lastModified
                        });
                        this.sendFileAsResponse_(filePath);
                    }
                }
                else {
                    this.sendFileAsResponse_(filePath);
                }
            }
            else {
                this.onNotAcceptableRequest();
            }
        }).catch(this.onErrorOccured.bind(this));
    }

    sendFileAsResponse_(filePath: string) {
        const readStream = Fs.createReadStream(filePath);
        // Handle non-existent file
        readStream.on('error', this.onErrorOccured.bind(this));
        readStream.pipe(this.response);
    }
}