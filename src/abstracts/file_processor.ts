import { Readable } from "stream";
import { HttpFile } from "../models";
import { createWriteStream } from "fs";
import { IHttpResult } from "../interfaces";

export abstract class FileProcessor {
    abstract validate(file: HttpFile): IHttpResult;
    abstract upload(stream: Readable & { truncated?: boolean }, file: HttpFile): Promise<void>;

    /**
     * saves file to supplied path
     *
     * @param {(Readable & { truncated?: boolean })} stream
     * @param {string} pathToSave
     * @return {*} 
     * @memberof FileProcessor
     */
    saveTo(stream: Readable & { truncated?: boolean }, pathToSave: string) {
        return new Promise<void>((resolve, reject) => {
            const writeStream = createWriteStream(pathToSave);
            // Pipe the stream directly to the file
            stream.pipe(writeStream);

            // Handle write completion
            writeStream.on('finish', () => {
                resolve();
            });

            // Handle errors in both streams
            writeStream.on('error', (err) => {
                reject(err);
            });

            stream.on('error', (err) => {
                reject(err);
            });
        });
    }
}
