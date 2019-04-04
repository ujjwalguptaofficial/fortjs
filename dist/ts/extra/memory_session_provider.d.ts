import { SessionProvider } from "../abstracts/session_provider";
import { SessionValue } from "../types/session_value";
export declare class MemorySessionProvider extends SessionProvider {
    get(key: string): Promise<any>;
    isExist(key: string): Promise<boolean>;
    getAll(): Promise<SessionValue[]>;
    set(key: string, val: any): Promise<void>;
    setMany(values: SessionValue[]): Promise<void[]>;
    remove(key: string): Promise<void>;
    clear(): Promise<void>;
}
