import { promise } from "./helpers/promise";
import { FileHelper } from "./helpers/file_helper";
import { HTTP_STATUS_CODE } from "./enums/http_status_code";
import { Global } from "./global";
import * as path from "path";
import { Current__Directory } from "./constant";
import { MIME_TYPE } from "./enums/mime_type";
import { IActionResult } from "./interfaces/action_result";
export class FileHandler {

    // path: string;
    extension: string;
    //folderRequired: string;
    relativeFilePath: string;
    constructor(filePath: string, extension: string) {

        // extract URL path
        // Avoid https://en.wikipedia.org/wiki/Directory_traversal_attack
        // e.g curl --path-as-is http://localhost:9000/../fileInDanger.txt
        // by limiting the path to current directory only
        // console.log("dirname", __dirname);
        //console.log("filePath", filePath);
        this.relativeFilePath = filePath;
        // this.folderRequired = this.getRequiredFolder_(filePath);
        // this.path = path.join(Current__Directory, filePath);
        //.normalize(path).replace(/^(\.\.[\/\\])+/, '');
        this.extension = extension.substr(1);
    }

    private getRequiredFolder_(path: string) {
        const splittedValue = path.split("/");
        if (splittedValue.length > 2) {
            return splittedValue[1];
        }
        return "/";
    }

    execute(): Promise<IActionResult> {
        return promise((resolve, reject) => {
            const folderRequired = this.getRequiredFolder_(this.relativeFilePath);
            if (Global.foldersAllowed.findIndex(qry => qry === folderRequired) >= 0) {
                let absolutePath = path.join(Current__Directory, this.relativeFilePath);
                FileHelper.isPathExist(absolutePath).then(isExist => {
                    if (isExist === true) {
                        FileHelper.isDirectory(absolutePath).then(isDirectory => {
                            if (isDirectory === true) {
                                absolutePath += '/index.html';
                            }
                            FileHelper.readFile(absolutePath).then(data => {
                                resolve({
                                    statusCode: HTTP_STATUS_CODE.Ok,
                                    contentType: MIME_TYPE[this.extension] || MIME_TYPE.Text,
                                    responseData: data
                                } as IActionResult);
                            }).catch(reject)
                        }).catch(reject);
                    }
                    else {
                        resolve({
                            statusCode: HTTP_STATUS_CODE.Not_Found,
                            contentType: MIME_TYPE.Text,
                            responseData: `File ${this.relativeFilePath} not found`
                        } as IActionResult);
                    }

                }).catch(reject);
            }
            else {
                resolve({
                    statusCode: HTTP_STATUS_CODE.Not_Found,
                    contentType: MIME_TYPE.Text,
                    responseData: `File ${this.relativeFilePath} not found`
                } as IActionResult);
            }
        });
    }
}