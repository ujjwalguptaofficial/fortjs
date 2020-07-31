import { HttpFile } from "./http_file";
export declare class FileManager {
    private files_;
    constructor(value: any);
    /**
     * get total no of files
     *
     * @returns - number
     * @memberof FileManager
     */
    get count(): number;
    get files(): HttpFile[];
    /**
     * check for existance of file
     *
     * @param {string} fieldName
     * @returns
     * @memberof FileManager
     */
    isExist(fieldName: string): boolean;
    /**
     * return the file
     *
     * @param {string} fieldName
     * @returns
     * @memberof FileManager
     */
    getFile(fieldName: string): HttpFile;
    /**
     * saves file to supplied path
     *
     * @param {string} fieldName
     * @param {string} pathToSave
     * @returns
     * @memberof FileManager
     */
    saveTo(fieldName: string, pathToSave: string): Promise<void>;
}
