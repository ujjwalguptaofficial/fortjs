import { MIME_TYPE } from "../enums";
import { IResultMapper } from "../interfaces";

export let getResultBasedOnMiMe: (type: MIME_TYPE, result) => any;

export function setResultMapper(mapper: typeof IResultMapper) {
    if (mapper) {
        getResultBasedOnMiMe = (type, result) => {
            return new mapper().map(type, result);
        };
    }
    else {
        getResultBasedOnMiMe = (type, result) => {
            switch (type) {
                case MIME_TYPE.Json:
                case MIME_TYPE.Text:
                case MIME_TYPE.Html:
                case MIME_TYPE.Xml:
                    if (typeof result === 'object' === true) {
                        return JSON.stringify(result);
                    }
            }
            return result;
        };
    }
}