import { SessionProvider } from "../abstracts/session_provider";
import { promiseResolve } from "../utils";

const sessionValues: { [identifier: string]: any } = {};

export class MemorySessionProvider extends SessionProvider {

    get(key: string) {
        const savedSession = sessionValues[this.sessionId];
        return promiseResolve(savedSession != null ? savedSession[key] : null);
    }

    isExist(key: string) {
        const savedValue = sessionValues[this.sessionId];
        return promiseResolve<boolean>(savedValue == null ? false : savedValue[key] != null);
    }

    getAll() {
        const savedValue = sessionValues[this.sessionId];
        return promiseResolve(savedValue == null ? {} : savedValue);
    }

    set(key: string, val: any) {
        const savedValue = sessionValues[this.sessionId];
        if (savedValue == null) {
            this.createSession();
            sessionValues[this.sessionId] = {
                [key]: val
            };
        }
        else {
            savedValue[key] = val;
        }
        return promiseResolve<void>(null);
    }

    setMany(values: { [key: string]: any }) {
        return Promise.all(
            Object.keys(values).map((key) => {
                return this.set(key, values[key]);
            })
        );
    }

    remove(key: string) {
        const savedValue = sessionValues[this.sessionId];
        if (savedValue != null) {
            savedValue[key] = null;
        }
        return promiseResolve<void>(null);
    }

    clear() {
        // remove session values
        delete sessionValues[this.sessionId];
        // expire cookie in browser
        this.destroySession();
        return promiseResolve<void>(null);
    }
}