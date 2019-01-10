import { HttpFile } from "./http_file";
export declare class FileManager {
    files: {
        [key: string]: HttpFile;
    };
    isExist(fileName: string): boolean;
    getFile(fileName: string): HttpFile;
    /**
     * saves file to supplied path
     *
     * @param {string} fileName
     * @param {string} pathToSave
     * @returns
     * @memberof FileManager
     */
    saveTo(fileName: string, pathToSave: string): Promise<void>;
}
