import { TComponentQuery } from "../types";
import { IHttpResult } from "./http_result";

export interface ICacheOption {
    key?: string;
    query?: TComponentQuery;
    param?: TComponentQuery;
}

export interface ICacheOptionStored extends ICacheOption {
    ttl: number;
}

export interface ICacheStore {
    set(option: ICacheData): Promise<void>;
    get(key: any): Promise<ICacheData>;
    delete(key: any): Promise<boolean>;
}

export interface ICacheData {
    key: any;
    expiry: number;
    data: IHttpResult;
}
