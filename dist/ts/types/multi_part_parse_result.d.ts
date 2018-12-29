import { HttpFile } from "../models/http_file";
export declare type MultiPartParseResult = {
    field: {
        [key: string]: any;
    };
    file: {
        [key: string]: HttpFile;
    };
};
