import { SessionProvider } from "../abstracts/session_provider";

const sessionValues: { [identifier: string]: any } = {};

export class MemorySessionProvider extends SessionProvider {

    async get(key: string) {
        const savedSession = sessionValues[this.sessionId];
        return savedSession != null ? savedSession[key] : null;
    }

    async isExist(key: string) {
        const savedValue = sessionValues[this.sessionId];
        return savedValue == null ? false : savedValue[key] != null;
    }

    async getAll() {
        const savedValue = sessionValues[this.sessionId];
        return savedValue == null ? {} : savedValue;
    }

    async set(key: string, val: any) {
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
    }

    setMany(values: { [key: string]: any }) {
        return Promise.all(
            Object.keys(values).map((key) => {
                return this.set(key, values[key]);
            })
        );
    }

    async remove(key: string) {
        const savedValue = sessionValues[this.sessionId];
        if (savedValue != null) {
            savedValue[key] = null;
        }
    }

    async clear() {
        // remove session values
        delete sessionValues[this.sessionId];
        // expire cookie in browser
        this.destroySession();
    }
}