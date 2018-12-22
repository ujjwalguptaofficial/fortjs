import { SessionProvider } from "../abstracts";
import { SessionValue } from "../types/session_value";
import { CookieManager } from "./cookie_manager";

export class GenericSessionProvider extends SessionProvider {
    sessionId: string;

    cookies: CookieManager;
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

    setMany(values: SessionValue[]): Promise<null> {
        return null;
    }

    async clear() {
        
    }
}