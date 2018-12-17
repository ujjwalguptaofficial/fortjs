import { HTTP_STATUS_CODE } from "./enums/http_status_code";
import { Global } from "./global";
import * as path from "path";
import { __ContentType } from "./constant";
import { RequestHandlerHelper } from "./request_handler_helper";
import * as Fs from "fs";
import { getMimeTypeFromExtension } from "./helpers/get_mime_type_from_extension";
import { promise } from "./helpers/promise";
import * as etag from "etag";
import { ETag_Type } from "./enums/etag_type";
import * as fresh from "fresh";
import { MIME_TYPE } from "./enums";

type FileInfo = {
    folder: string,
    file: string;
}
export class FileHandler extends RequestHandlerHelper {

    private getFileInfoFromUrl_(urlPath: string) {
        const splittedValue = urlPath.split("/");
        const fileInfo = {
            folder: "/",
            file: ""
        } as FileInfo;
        if (splittedValue.length > 2 || !this.isNullOrEmpty(path.parse(urlPath).ext)) {
            fileInfo.folder = splittedValue[1];
            fileInfo.file = splittedValue.splice(2).join("/");
        }
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

    protected async handleFileRequestFromAbsolutePath(absolutePath: string, fileType: string) {
        try {
            const fileInfo = await this.getFileStats_(absolutePath);
            if (fileInfo != null) {
                if (fileInfo.isDirectory() === true) {
                    this.handleFileRequestForFolder_(absolutePath, fileInfo);
                }
                else {
                    this.sendFile_(absolutePath, fileType, fileInfo);
                }
            }
            else {
                this.onNotFound();
            }
        }
        catch (ex) {
            this.onErrorOccured(ex);
        }
        return null;
    }

    private checkForFolderAllowAndReturnPath_(urlPath: string) {
        const fileInfo = this.getFileInfoFromUrl_(urlPath);
        const getAbsPath = () => {
            const folder = Global.folders.find(qry => qry.alias === fileInfo.folder);
            if (folder != null) {
                return path.join(folder.path, fileInfo.file);
            }
            return null;
        }
        let absPath = getAbsPath();
        if (absPath == null) {
            fileInfo.folder = "/";
            fileInfo.file = urlPath;
            absPath = getAbsPath();
        }
        return absPath;

    }

    protected handleFileRequest(urlPath: string, fileType: string) {
        const absFilePath = this.checkForFolderAllowAndReturnPath_(urlPath);
        if (absFilePath != null) {
            this.handleFileRequestFromAbsolutePath(absFilePath, fileType);
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
    private async handleFileRequestForFolder_(absolutePath: string, fileInfo: Fs.Stats) {
        try {
            absolutePath = path.join(absolutePath, "index.html");
            fileInfo = await this.getFileStats_(absolutePath);
            if (fileInfo != null) {
                const fileType = MIME_TYPE.Html;
                this.sendFile_(absolutePath, fileType, fileInfo);
            }
            else {
                this.onNotFound();
            }
        }
        catch (ex) {
            this.onErrorOccured(ex);
        }
        return null;
    }

    protected async handleFileRequestForFolder(urlPath: string) {
        try {
            const absFilePath = this.checkForFolderAllowAndReturnPath_(urlPath);
            if (absFilePath != null) {
                const fileInfo = await this.getFileStats_(absFilePath);
                if (fileInfo != null && fileInfo.isDirectory() === true) {
                    this.handleFileRequestForFolder_(absFilePath, fileInfo);
                }
                else {
                    this.onNotFound();
                }
            }
            else {
                this.onNotFound();
            }
        }
        catch (ex) {
            this.onErrorOccured(ex);
        }
        return null;
    }

    private isClientHasFreshFile_(lastModified: string, etagValue: string) {
        return fresh(this.request.headers, {
            'etag': etagValue,
            'last-modified': lastModified
        });
    }

    private async sendFile_(filePath: string, fileType: string, fileInfo: Fs.Stats) {
        try {
            await this.runWallOutgoing();
            let mimeType;
            if (fileType[0] === '.') { // its extension
                mimeType = getMimeTypeFromExtension(fileType);
            }
            else { // mime type
                mimeType = fileType;
            }
            const negotiateMimeType = this.getContentTypeFromNegotiation(mimeType) as MIME_TYPE;
            if (negotiateMimeType != null) {
                const lastModified = fileInfo.mtime.toUTCString();
                const eTagValue = etag(fileInfo, {
                    weak: Global.eTag.type === ETag_Type.Weak
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
                    const readStream = Fs.createReadStream(filePath);
                    // Handle non-existent file
                    readStream.on('error', this.onErrorOccured.bind(this));
                    readStream.pipe(this.response);
                }
            }
            else {
                this.onNotAcceptableRequest();
            }
        }
        catch (ex) {
            this.onErrorOccured(ex);
        }
        return null;
    }
}