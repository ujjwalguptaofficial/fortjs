import { HttpFile } from "./http_file";
import * as Fs from "fs-extra";

export class FileManager {

    private files_: { [fieldName: string]: HttpFile } = {};

    /**
     * get total no of files
     *
     * @returns - number
     * @memberof FileManager
     */
    get count() {
        return Object.keys(this.files_).length;
    }

    get files() {

        return Object.keys(this.files_).map(fileId => {
            return this.files_[fileId];
        });
    }

    set files(value) {
        this.files_ = value as any;
    }

    /**
     * check for existance of file
     *
     * @param {string} fieldName
     * @returns
     * @memberof FileManager
     */
    isExist(fieldName: string) {
        return this.files_[fieldName] != null;
    }

    /**
     * return the file
     *
     * @param {string} fieldName
     * @returns
     * @memberof FileManager
     */
    getFile(fieldName: string) {
        return this.files_[fieldName];
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
        return Fs.copy(this.files_[fieldName].path, pathToSave);
    }
}