
import { HTTP_RESULT_TYPE, HTTP_STATUS_CODE } from "../enums";
import { IHttpResult, IFileResultInfo, customResult } from "../interfaces";
import { handleFileResult } from "./handle_file_result";

export const fileResult = (filePath: string) => {
    return customResult(
        handleFileResult({
            filePath: filePath
        } as IFileResultInfo)
    );
    // return {
    //     statusCode: HTTP_STATUS_CODE.Ok,
    //     responseData: handleFileResult(
    //         {
    //             filePath: filePath
    //         } as IFileResultInfo,
    //     ),
    //     // responseData: {
    //     //     filePath: filePath
    //     // } as IFileResultInfo,
    //     type: HTTP_RESULT_TYPE.Custom
    // } as IHttpResult;
};
