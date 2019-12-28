import { MIME_TYPE } from "../enums";
export declare abstract class IResultMapper {
    map: (type: MIME_TYPE, result: any, setMimeType?: (type: any) => void) => any;
}
