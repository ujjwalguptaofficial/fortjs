import { HttpFile } from "./http_file";
import * as Fs from "fs-extra";
 
export class FileManager {
    files: { [key: string]: HttpFile } = {};

    isExist(fileName: string) {
        return this.files[fileName] != null;
    }

    getFile(fileName: string) {
        return this.files[fileName];
    }

    /**
     * saves file to supplied path
     *
     * @param {string} fileName
     * @param {string} pathToSave
     * @returns
     * @memberof FileManager
     */
    saveTo(fileName: string, pathToSave: string) {
        return Fs.copy(this.files[fileName].path, pathToSave);
    }
}