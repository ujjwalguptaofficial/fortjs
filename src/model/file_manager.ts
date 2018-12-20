import { HttpFile } from "./http_file";
import { FileHelper } from "../helpers/file_helper";

export class FileManager {
    files: { [key: string]: HttpFile };

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
        return FileHelper.copyFile(this.files[fileName].path, pathToSave);
    }
}