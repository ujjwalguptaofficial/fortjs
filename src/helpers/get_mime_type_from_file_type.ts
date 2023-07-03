import { MIME_TYPE } from "../enums";
import { getMimeTypeFromExtension } from "./get_mime_type_from_extension";

export function getMimeTypeFromFileType(fileType: string) {
    return fileType[0] === '.' ? getMimeTypeFromExtension(fileType) :
        fileType as MIME_TYPE;
}