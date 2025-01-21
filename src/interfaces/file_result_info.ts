import { Stats } from "fs";

export interface IFileResultInfo {
    filePath: string;
    alias?: string;
    shouldDownload?: boolean;
    fileInfo?: Stats
}
