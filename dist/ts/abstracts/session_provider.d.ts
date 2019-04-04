import { CookieManager } from "../models";
import { SessionValue } from "../types";
export declare abstract class SessionProvider {
    sessionId: string;
    protected cookie: CookieManager;
    abstract get(key: string): Promise<any>;
    abstract isExist(key: string): Promise<boolean>;
    abstract getAll(): Promise<SessionValue[]>;
    abstract set(key: string, val: any): Promise<void>;
    abstract setMany(values: SessionValue[]): Promise<void[]>;
    abstract remove(key: string): Promise<void>;
    abstract clear(): Promise<void>;
    protected createSession(): void;
    protected destroySession(): void;
}
