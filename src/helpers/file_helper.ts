import * as Fs from "fs";
import { promise } from "./promise";

export class FileHelper {

    static isPathExist(path: string): Promise<boolean> {
        return promise((resolve, reject) => {
            try {
                Fs.exists(path, (isExist) => {
                    resolve(isExist);
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    static isDirectory(path: string): Promise<boolean> {
        return promise((resolve, reject) => {
            try {
                Fs.lstat(path, (err, status) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(status.isDirectory());
                    }
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    static readFile(path: string): Promise<string> {
        return promise((resolve, reject) => {
            try {
                Fs.readFile(path, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    static copyFile(oldPath: string, newPath: string) {
        return new Promise((res, rej) => {
            Fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    if (err.code === 'EXDEV') {
                        copy();
                    } else {
                        rej(err);
                    }
                }
                res();
            });

            const copy = () => {
                const readStream = Fs.createReadStream(oldPath);
                const writeStream = Fs.createWriteStream(newPath);

                readStream.on('error', rej);
                writeStream.on('error', rej);

                readStream.on('close', () => {
                    Fs.unlink(oldPath, res);
                });

                readStream.pipe(writeStream);
            };
        });
    }

    static createDir(path: string) {
        return new Promise((resolve, reject) => {
            try {
                Fs.mkdir(path, (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                });
            }
            catch (ex) {
                reject(ex);
            }

        });
    }

    static writeFile(path: string, contents: string) {
        return new Promise((resolve, reject) => {
            try {
                Fs.writeFile(path, contents, { flag: 'w' }, (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                });
            }
            catch (ex) {
                reject(ex);
            }

        });
    }
}
