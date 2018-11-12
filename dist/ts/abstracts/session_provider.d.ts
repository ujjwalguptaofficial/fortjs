import { ISessionValue } from "../interfaces/session_value";
import { CookieManager } from "../model/cookie_manager";
export declare abstract class SessionProvider {
    protected sessionId: string;
    protected cookies: CookieManager;
    abstract get(key: string): Promise<ISessionValue>;
    abstract isExist(key: string): Promise<boolean>;
    abstract getAll(): Promise<ISessionValue[]>;
    abstract set(key: string, val: any): Promise<null>;
    abstract setMany(values: ISessionValue[]): Promise<null>;
    abstract remove(key: string): Promise<null>;
    protected createSession(): Promise<null>;
}
