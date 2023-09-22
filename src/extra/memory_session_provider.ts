import { SessionProvider } from "../abstracts/session_provider";
import { promiseResolve } from "../utils";

const sessionValues: Map<string, { [key: string]: any }> = new Map();

export class MemorySessionProvider extends SessionProvider {

    private getSessionValue_() {
        return sessionValues.get(this.sessionId);
    }

    get(key: string) {
        const savedValue = this.getSessionValue_()
        return promiseResolve(savedValue != null ? savedValue[key] : null);
    }

    isExist(key: string) {
        const savedValue = this.getSessionValue_()
        return promiseResolve<boolean>(savedValue == null ? false : savedValue[key] != null);
    }

    getAll() {
        const savedValue = this.getSessionValue_();
        return promiseResolve(savedValue || {});
    }

    set(key: string, val: any) {
        const savedValue = this.getSessionValue_();
        if (savedValue == null) {
            this.createSession();
            sessionValues.set(this.sessionId, {
                [key]: val
            });
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
        const savedValue = this.getSessionValue_();
        if (savedValue != null) {
            savedValue[key] = null;
        }
        return promiseResolve<void>(null);
    }

    clear() {
        // remove session values
        sessionValues.delete(this.sessionId);
        // expire cookie in browser
        this.destroySession();
        return promiseResolve<void>(null);
    }
}