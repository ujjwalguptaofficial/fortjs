import { MIME_TYPE } from "../enums";
import { IResultMapper } from "../interfaces";
export declare let getResultBasedOnMiMe: (type: MIME_TYPE, result: any) => any;
export declare function setResultMapper(mapper: typeof IResultMapper): void;
