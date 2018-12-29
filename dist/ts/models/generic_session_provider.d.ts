import { SessionProvider } from "../abstracts";
import { SessionValue } from "../types/session_value";
import { CookieManager } from "./cookie_manager";
export declare class GenericSessionProvider extends SessionProvider {
    sessionId: string;
    cookie: CookieManager;
    get(): any;
    getAll(): any;
    set(key: any, value: any): any;
    isExist(key: any): any;
    remove(key: any): any;
    setMany(values: SessionValue[]): Promise<null>;
    clear(): Promise<void>;
}
