import { HttpFile } from "../model/http_file";

export type MultiPartParseResult = {
    field: { [key: string]: any };
    file: { [key: string]: HttpFile };
};