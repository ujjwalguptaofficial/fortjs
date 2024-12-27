import { HttpFile } from "./http_file";
import { createWriteStream } from "fs";

export class FileManager {

    private files_: { [fieldName: string]: HttpFile };

    constructor(value) {
        this.files_ = value as any;
    }

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
    
}
