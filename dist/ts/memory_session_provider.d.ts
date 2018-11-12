import { SessionProvider } from "./abstracts";
import { ISessionValue } from "./interfaces/session_value";
export declare class MemorySessionProvider extends SessionProvider {
    get(key: string): Promise<ISessionValue>;
    isExist(key: string): Promise<boolean>;
    getAll(): Promise<ISessionValue[]>;
    set(key: string, val: any): Promise<null>;
    setMany(values: ISessionValue[]): Promise<null>;
    remove(key: string): Promise<null>;
}
