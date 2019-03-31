import { DATA_TYPE } from "../enums/data_type";
export declare const getDataType: (value: any) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | DATA_TYPE.Array;
