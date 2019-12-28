import { MIME_TYPE } from "../enums";

export abstract class ResultMapper {
    abstract map(type: MIME_TYPE, result, setMimeType?: (type) => void): any;
}