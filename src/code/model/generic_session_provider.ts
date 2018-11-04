import { SessionProvider } from "../abstracts";
import { ISessionValue } from "../interfaces/session_value";
import { CookieManager } from "./cookie_manager";

export class GenericSessionProvider extends SessionProvider {
    public sessionId: string;

    public cookies: CookieManager;
    get() {
        return null;
    }

    getAll() {
        return null;
    }

    set(key, value) {
        return null;
    }

    isExist(key) {
        return null;
    }

    remove(key) {
        return null;
    }

    setMany(values: ISessionValue[]): Promise<null> {
        return null;
    }
}