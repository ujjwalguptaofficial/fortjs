import { CookieManager } from "../models";
export declare abstract class SessionProvider {
    sessionId: string;
    protected cookie: CookieManager;
    abstract get(key: string): Promise<any>;
    abstract isExist(key: string): Promise<boolean>;
    abstract getAll(): Promise<{
        [key: string]: any;
    }>;
    abstract set(key: string, val: any): Promise<void>;
    abstract setMany(values: {
        [key: string]: any;
    }): Promise<void[]>;
    abstract remove(key: string): Promise<void>;
    abstract clear(): Promise<void>;
    protected createSession(sessionId?: any): void;
    protected destroySession(): void;
}
