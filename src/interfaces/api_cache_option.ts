import { TComponentQuery } from "../types";
import { IHttpResult } from "./http_result";

export interface ICacheOption {
    key?: string;
    query: TComponentQuery;
    param: TComponentQuery;
}

export interface ICacheOptionStored extends ICacheOption {
    ttl: number;
}

export interface ICacheStore {
    set(option: ICacheData): Promise<void>;
    get(key: string): Promise<ICacheData>;
    delete(key: string): Promise<boolean>;
}

export interface ICacheData {
    key: string;
    expiry: number;
    data: IHttpResult;
}
