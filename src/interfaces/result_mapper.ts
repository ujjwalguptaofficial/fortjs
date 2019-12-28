import { MIME_TYPE } from "../enums";

export class IResultMapper {
    map(type: MIME_TYPE, result) {
        return result;
    }
}