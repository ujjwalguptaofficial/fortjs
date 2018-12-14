import { ISessionValue } from "../interfaces/session_value";
import { CookieManager } from "../model/cookie_manager";
export declare abstract class SessionProvider {
    sessionId: string;
    protected cookies: CookieManager;
    abstract get(key: string): Promise<ISessionValue>;
    abstract isExist(key: string): Promise<boolean>;
    abstract getAll(): Promise<ISessionValue[]>;
    abstract set(key: string, val: any): Promise<void>;
    abstract setMany(values: ISessionValue[]): Promise<void[]>;
    abstract remove(key: string): Promise<void>;
    protected createSession(): Promise<void>;
}
