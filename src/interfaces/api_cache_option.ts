import { TComponentQuery } from "../types";

export interface ICacheOption {
    key?: string;
    query: TComponentQuery;
    param: TComponentQuery;
}

export interface ICacheStore {
    set(option: ICacheData): Promise<void>;
    get(key: string): Promise<ICacheData>;
    delete(key: string): Promise<boolean>;
}

export interface ICacheData {
    key: string;
    expiry: number;
    data: any;
}
