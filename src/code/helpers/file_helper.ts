import * as fs from "fs";
import { promise } from "./promise";

export class FileHelper {

    static isPathExist(path: string): Promise<boolean> {
        return promise((resolve, reject) => {
            try {
                fs.exists(path, (isExist) => {
                    resolve(isExist);
                })
            }
            catch (ex) {
                reject(ex);
            }
        })
    }

    static isDirectory(path: string): Promise<boolean> {
        return promise((resolve, reject) => {
            try {
                fs.lstat(path, (err, status) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(status.isDirectory());
                    }
                })
            }
            catch (ex) {
                reject(ex);
            }
        })
    }

    static readFile(path: string): Promise<string> {
        return promise((resolve, reject) => {
            try {
                fs.readFile(path, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                })
            }
            catch (ex) {
                reject(ex);
            }
        })
    }
}
