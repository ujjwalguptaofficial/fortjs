import { HttpFile } from "../models";
export declare type MultiPartParseResult = {
    field: {
        [key: string]: any;
    };
    file: {
        [key: string]: HttpFile;
    };
};
