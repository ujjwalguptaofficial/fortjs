import { HTTP_STATUS_CODE } from "./enums/http_status_code";
import { Global } from "./global";
import * as path from "path";
import { Current__Directory, Content__Type } from "./constant";
import { RequestHandlerHelper } from "./request_handler_helper";
import * as Fs from "fs";
import { getMimeTypeFromExtension } from "./helpers/get_mime_type_from_extension";
import { promise } from "./helpers/promise";
import * as etag from "etag";
import { ETag_Type } from "./enums/etag_type";
import * as fresh from "fresh";
export class FileHandler extends RequestHandlerHelper {

    private getRequiredFolder_(path: string) {
        const splittedValue = path.split("/");
        if (splittedValue.length > 2) {
            return splittedValue[1];
        }
        return "/";
    }

    private getFileStats_(path) {
        return promise<Fs.Stats>((res, rej) => {
            Fs.lstat(path, (err, status) => {
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
        })
    }


    protected async handleFileRequest(filePath: string, fileType: string) {
        const folderRequired = this.getRequiredFolder_(filePath);
        if (Global.foldersAllowed.findIndex(qry => qry === folderRequired) >= 0) {
            let absolutePath = path.join(Current__Directory, filePath);
            try {
                let fileInfo = await this.getFileStats_(absolutePath);
                if (fileInfo != null) {
                    if (fileInfo.isDirectory() === true) {
                        absolutePath += '/index.html';
                        fileInfo = await this.getFileStats_(absolutePath);
                        if (fileInfo != null) {
                            this.sendFile_(absolutePath, fileType, fileInfo);
                        }
                        else {
                            this.onNotFound();
                        }
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
        }
        else {
            this.onNotFound();
        }
    }

    private isClientHasFreshFile_(lastModified: string, etag: string) {
        return fresh(this.request.headers, {
            'etag': etag,
            'last-modified': lastModified
        })
    }

    private sendFile_(path: string, fileType: string, fileInfo: Fs.Stats) {
        const lastModified = fileInfo.mtime.toUTCString();
        const eTagValue = etag(fileInfo, {
            weak: Global.eTag.type === ETag_Type.Weak
        });
        if (this.isClientHasFreshFile_(lastModified, eTagValue)) { // client has fresh file
            this.response.statusCode = HTTP_STATUS_CODE.NotModified;
            this.response.end();
        }
        else {
            let mimeType;
            if (fileType[0] === '.') { // its extension
                mimeType = getMimeTypeFromExtension(fileType);
            }
            else { // mime type
                mimeType = fileType;
            }
            this.response.writeHead(HTTP_STATUS_CODE.Ok, {
                [Content__Type]: mimeType,
                'Etag': eTagValue,
                'Last-Modified': lastModified
            })
            const readStream = Fs.createReadStream(path);
            // Handle non-existent file
            readStream.on('error', this.onErrorOccured.bind(this));
            readStream.pipe(this.response);
        }

    }
}