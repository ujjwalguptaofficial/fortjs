import { HttpFile } from "../models";

export type MultiPartParseResult = {
    field: { [key: string]: any };
    file: { [key: string]: HttpFile };
};