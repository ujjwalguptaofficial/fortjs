import { ISessionValue } from "../interfaces/session_value";
import { SessionProvider } from "../abstracts/session_provider";
export declare class MemorySessionProvider extends SessionProvider {
    get(key: string): Promise<ISessionValue>;
    isExist(key: string): Promise<boolean>;
    getAll(): Promise<ISessionValue[]>;
    set(key: string, val: any): Promise<void>;
    setMany(values: ISessionValue[]): Promise<void[]>;
    remove(key: string): Promise<void>;
}
