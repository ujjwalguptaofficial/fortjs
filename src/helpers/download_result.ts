
import { HTTP_RESULT_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { handleFileResult } from "../handlers/handle_file_result";
import { customResult, IFileResultInfo, IHttpResult } from "../interfaces";

export const downloadResult = (filePath: string, downloadFileName?: string) => {
    return customResult(
        handleFileResult({
            filePath: filePath,
            shouldDownload: true,
            alias: downloadFileName
        } as IFileResultInfo)
    );
};
