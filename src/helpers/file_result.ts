
import { IFileResultInfo, customResult } from "../interfaces";
import { handleFileResult } from "../handlers/handle_file_result";

export const fileResult = (filePath: string) => {
    return customResult(
        handleFileResult({
            filePath: filePath
        } as IFileResultInfo)
    );
};
