import { parse } from "path";
import { customResult, IFileResultInfo } from "../interfaces";
import { FileHandler } from "../handlers";

export function handleFileResult(fileResult: IFileResultInfo) {
    return async (option) => {
        const parsedPath = parse(fileResult.filePath);
        if (fileResult.shouldDownload === true) {
            const fileName = fileResult.alias == null ? parsedPath.name : fileResult.alias;
            this.response.setHeader(
                "content-disposition",
                `attachment;filename=${fileName}${parsedPath.ext}`
            );
        }
        const fileHandler = new FileHandler(option['componentProp_']);
        const fileResultForSendingResponse = fileResult.fileInfo ? fileResult : await fileHandler.getFileResultFromAbsolutePath(
            fileResult.filePath
        );
        if (fileResultForSendingResponse == null) {
            return new option.app.errorHandler().onNotFound(
                option.request.url
            );
        }
        return fileHandler.send(fileResultForSendingResponse);
    }
}
