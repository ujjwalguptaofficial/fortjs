import { HttpFile } from "../model/http_file";
export declare type MultiPartParseResult = {
    field: {
        [key: string]: any;
    };
    file: {
        [key: string]: HttpFile;
    };
};
