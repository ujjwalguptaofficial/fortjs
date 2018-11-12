export declare class FileHelper {
    static isPathExist(path: string): Promise<boolean>;
    static isDirectory(path: string): Promise<boolean>;
    static readFile(path: string): Promise<string>;
}
