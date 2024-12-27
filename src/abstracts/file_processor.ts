import { Readable } from "stream";
import { HttpFile } from "../models";

export abstract class FileProcessor {
    abstract validate(file: HttpFile): true;
    abstract upload(stream: Readable & { truncated?: boolean }): Promise<void>;
}
