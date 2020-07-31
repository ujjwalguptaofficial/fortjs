import { MIME_TYPE } from "../enums";
import { ResultMapper } from "../abstracts";
export declare let getResultBasedOnMiMe: (type: MIME_TYPE, result: any, setMimeType: (type: any) => void) => any;
export declare function setResultMapper(mapper: typeof ResultMapper): void;
