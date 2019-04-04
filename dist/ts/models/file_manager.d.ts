import { HttpFile } from "./http_file";
export declare class FileManager {
    files: {
        [key: string]: HttpFile;
    };
    /**
     * get total no of files
     *
     * @returns - number
     * @memberof FileManager
     */
    filesCount(): number;
    /**
     * check for existance of file
     *
     * @param {string} fileName
     * @returns - true if exist otherwise false
     * @memberof FileManager
     */
    isExist(fileName: string): boolean;
    /**
     * return the file
     *
     * @param {string} fileName
     * @returns
     * @memberof FileManager
     */
    getFile(fileName: string): HttpFile;
    /**
     * saves file to supplied path
     *
     * @param {string} fileName - name of file to be saved
     * @param {string} pathToSave - location of file with extension
     * @returns
     * @memberof FileManager
     */
    saveTo(fileName: string, pathToSave: string): Promise<void>;
}
