import { FileHelper } from "./helpers/file_helper";
import { HTTP_STATUS_CODE } from "./enums/http_status_code";
import { Global } from "./global";
import * as path from "path";
import { Current__Directory, Content__Type } from "./constant";
import { RequestHandlerHelper } from "./request_handler_helper";
import * as Fs from "fs";
import { getMimeTypeFromExtension } from "./helpers/get_mime_type_from_extension";
export class FileHandler extends RequestHandlerHelper {

    private getRequiredFolder_(path: string) {
        const splittedValue = path.split("/");
        if (splittedValue.length > 2) {
            return splittedValue[1];
        }
        return "/";
    }


    protected handleFileRequest(filePath: string, fileType: string) {
        const folderRequired = this.getRequiredFolder_(filePath);
        if (Global.foldersAllowed.findIndex(qry => qry === folderRequired) >= 0) {
            let absolutePath = path.join(Current__Directory, filePath);
            FileHelper.isPathExist(absolutePath).then(isExist => {
                if (isExist === true) {
                    FileHelper.isDirectory(absolutePath).then(isDirectory => {
                        if (isDirectory === true) {
                            absolutePath += '/index.html';
                            FileHelper.isPathExist(absolutePath).then(isFileExist => {
                                if (isFileExist === true) {
                                    this.sendFile_(absolutePath, fileType);
                                }
                                else {
                                    this.onNotFound();
                                }
                            });
                        }
                        else {
                            this.sendFile_(absolutePath, fileType);
                        }
                    }).catch(this.onErrorOccured.bind(this));
                }
                else {
                    this.onNotFound();
                }

            }).catch(this.onErrorOccured.bind(this));
        }
        else {
            this.onNotFound();
        }
    }

    private sendFile_(path: string, fileType: string) {
        const readStream = Fs.createReadStream(path);
        // Handle non-existent file
        readStream.on('error', this.onErrorOccured.bind(this));
        this.response.statusCode = HTTP_STATUS_CODE.Ok;
        let mimeType;
        if (fileType[0] === '.') { // its extension
            mimeType = getMimeTypeFromExtension(fileType);
        }
        else { // mime type
            mimeType = fileType;
        }
        this.response.setHeader(Content__Type, mimeType);
        readStream.pipe(this.response);
    }
}