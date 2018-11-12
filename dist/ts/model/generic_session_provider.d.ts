import { SessionProvider } from "../abstracts";
import { ISessionValue } from "../interfaces/session_value";
import { CookieManager } from "./cookie_manager";
export declare class GenericSessionProvider extends SessionProvider {
    sessionId: string;
    cookies: CookieManager;
    get(): any;
    getAll(): any;
    set(key: any, value: any): any;
    isExist(key: any): any;
    remove(key: any): any;
    setMany(values: ISessionValue[]): Promise<null>;
}
