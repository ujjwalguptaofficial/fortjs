import { SessionProvider } from "../abstracts";
import { SessionValue } from "../types";
import { CookieManager } from "../models";


export class GenericSessionProvider extends SessionProvider {
    sessionId: string;

    cookie: CookieManager;
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

    // eslint-disable-next-line
    clear() {
        return null;
    }
}