import { handleFileResult } from "../handlers/handle_file_result";
import { IFileResultInfo } from "../interfaces";
import { customResult } from "./custom_result";

export const downloadResult = (filePath: string, downloadFileName?: string) => {
    return customResult(
        handleFileResult({
            filePath: filePath,
            shouldDownload: true,
            alias: downloadFileName
        } as IFileResultInfo)
    );
};
