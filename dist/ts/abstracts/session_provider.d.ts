import { CookieManager } from "../model/cookie_manager";
import { SessionValue } from "../types/session_value";
export declare abstract class SessionProvider {
    sessionId: string;
    protected cookie: CookieManager;
    abstract get(key: string): Promise<SessionValue>;
    abstract isExist(key: string): Promise<boolean>;
    abstract getAll(): Promise<SessionValue[]>;
    abstract set(key: string, val: any): Promise<void>;
    abstract setMany(values: SessionValue[]): Promise<void[]>;
    abstract remove(key: string): Promise<void>;
    abstract clear(): Promise<void>;
    protected createSession(): Promise<void>;
    protected destroySession(): Promise<void>;
}
