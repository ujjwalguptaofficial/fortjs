import { HttpFile } from "./http_file";
import * as Fs from "fs-extra";

let files: { [fieldName: string]: HttpFile };
export class FileManager {


    /**
     * get total no of files
     *
     * @returns - number
     * @memberof FileManager
     */
    get count() {
        return Object.keys(files).length;
    }

    get files() {
        const results: HttpFile[] = [];
        for (const file in files) {
            results.push(files[file]);
        }
        return results;
    }

    set files(value) {
        files = value as any;
    }

    /**
     * check for existance of file
     *
     * @param {string} fieldName
     * @returns
     * @memberof FileManager
     */
    isExist(fieldName: string) {
        return files[fieldName] != null;
    }

    /**
     * return the file
     *
     * @param {string} fieldName
     * @returns
     * @memberof FileManager
     */
    getFile(fieldName: string) {
        return files[fieldName];
    }

    /**
     * saves file to supplied path
     *
     * @param {string} fieldName
     * @param {string} pathToSave
     * @returns
     * @memberof FileManager
     */
    saveTo(fieldName: string, pathToSave: string) {
        return Fs.copy(files[fieldName].path, pathToSave);
    }
}