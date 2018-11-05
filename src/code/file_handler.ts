import * as http from "http";
import { ActionResult } from "./model";
import { promise } from "./helpers/promise";
import { IActionExecuteResult } from "./interfaces/action_execute_result";
import { FileHelper } from "./helpers/file_helper";
import { HTTP_STATUS_CODE, MIME_TYPE } from "./enums";
import { Global } from "./global";
import * as path from "path";
import { Current__Directory } from "./constant";
export class FileHandler extends ActionResult {

    path: string;
    extension: string;
    constructor(filePath: string, extension: string) {
        super();
        // extract URL path
        // Avoid https://en.wikipedia.org/wiki/Directory_traversal_attack
        // e.g curl --path-as-is http://localhost:9000/../fileInDanger.txt
        // by limiting the path to current directory only
        // console.log("dirname", __dirname);
        // console.log("filePath", filePath);
        // console.log("fileName", __filename);
        this.path = path.join(Current__Directory, filePath);
        //.normalize(path).replace(/^(\.\.[\/\\])+/, '');
        this.extension = extension.substr(1);
    }

    execute(): Promise<IActionExecuteResult> {
        return promise((resolve, reject) => {
            //  Global.filesPathAllowed
            console.log(this.path);
            FileHelper.isPathExist(this.path).then(isExist => {
                if (isExist === true) {
                    FileHelper.isDirectory(this.path).then(isDirectory => {
                        if (isDirectory === true) {
                            this.path += '/index.html';
                        }
                    }).catch(reject);

                    FileHelper.readFile(this.path).then(data => {
                        resolve({
                            statusCode: HTTP_STATUS_CODE.Ok,
                            contentType: MIME_TYPE[this.extension] || MIME_TYPE.Text,
                            responseData: data
                        } as IActionExecuteResult);
                    }).catch(reject)
                }
                else {
                    resolve({
                        statusCode: HTTP_STATUS_CODE.Not_Found,
                        contentType: MIME_TYPE.Text,
                        responseData: `File ${this.path} not found`
                    } as IActionExecuteResult);
                }
            }).catch(reject);
        });
    }
}