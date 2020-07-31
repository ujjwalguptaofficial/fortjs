import { MIME_TYPE } from "../enums";
import { ResultMapper } from "../abstracts";

export let getResultBasedOnMiMe = (type: MIME_TYPE, result, setMimeType: (type) => void) => {
    switch (type) {
        case MIME_TYPE.Json:
        case MIME_TYPE.Text:
        case MIME_TYPE.Html:
        case MIME_TYPE.Xml:
            if (typeof result === 'object' === true) {
                setMimeType(MIME_TYPE.Json);
                return JSON.stringify(result);
            }
    }
    return result;
};

export function setResultMapper(mapper: typeof ResultMapper) {
    getResultBasedOnMiMe = (type, result, callBack) => {
        return new (mapper as any)().map(type, result, callBack);
    };
}