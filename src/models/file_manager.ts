import { HttpFile } from "./http_file";
import * as Fs from "fs-extra";

export class FileManager {
    files: { [key: string]: HttpFile } = {};

    /**
     * get total no of files
     *
     * @returns - number
     * @memberof FileManager
     */
    filesCount() {
        return Object.keys(this.files).length;
    }

    /**
     * check for existance of file
     *
     * @param {string} fileName
     * @returns - true if exist otherwise false
     * @memberof FileManager
     */
    isExist(fileName: string) {
        return this.files[fileName] != null;
    }

    /**
     * return the file
     *
     * @param {string} fileName
     * @returns
     * @memberof FileManager
     */
    getFile(fileName: string) {
        return this.files[fileName];
    }

    /**
     * saves file to supplied path
     *
     * @param {string} fileName - name of file to be saved
     * @param {string} pathToSave - location of file with extension
     * @returns
     * @memberof FileManager
     */
    saveTo(fileName: string, pathToSave: string) {
        return Fs.copy(this.files[fileName].path, pathToSave);
    }
}