import { HttpFile } from "../models";

export interface IMultiPartParseResult {
    field: { [key: string]: any };
    file: { [key: string]: HttpFile };
}