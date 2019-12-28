import { MIME_TYPE } from "../enums";

export abstract class IResultMapper {
    map: (type: MIME_TYPE, result, setMimeType?: (type) => void) => any;
}