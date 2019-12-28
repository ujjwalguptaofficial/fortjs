import { MIME_TYPE } from "../enums";
export declare abstract class ResultMapper {
    abstract map(type: MIME_TYPE, result: any, setMimeType?: (type: any) => void): any;
}
