export declare class FileHelper {
    static isPathExist(path: string): Promise<boolean>;
    static isDirectory(path: string): Promise<boolean>;
    static readFile(path: string): Promise<string>;
    static copyFile(oldPath: string, newPath: string): Promise<{}>;
    static createDir(path: string): Promise<{}>;
    static writeFile(path: string, contents: string): Promise<{}>;
}
