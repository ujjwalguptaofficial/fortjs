
import { SessionProvider } from "../abstracts/session_provider";
import { SessionValue } from "../types/session_value";


interface ISessionValueFormat {
    identifier: string;
    datas: { [key: string]: any };
}

const sessionValues: ISessionValueFormat[] = [];

export class MemorySessionProvider extends SessionProvider {

    async get(key: string) {
        console.log('key', key, 'session Values', sessionValues);
        const savedSession = sessionValues.find(q => q.identifier === this.sessionId);
        if (savedSession != null) {
            return savedSession.datas[key];
        }
        return null;
    }

    async isExist(key: string) {
        const savedValue = sessionValues.find(q => q.identifier === this.sessionId);
        if (savedValue == null) {
            return false;
        }
        else {
            return savedValue.datas[key] != null;
        }
    }

    async getAll() {
        const savedValue = sessionValues.find(q => q.identifier === this.sessionId);
        return savedValue == null ? [] : savedValue.datas;
    }

    async set(key: string, val: any) {
        const savedValue = sessionValues.find(q => q.identifier === this.sessionId);
        if (savedValue == null) {
            this.createSession();
            sessionValues.push({
                identifier: this.sessionId,
                datas: {
                    [key]: val
                }
            });
        }
        else {
            savedValue.datas[key] = val;
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
        const savedValue = sessionValues.find(q => q.identifier === this.sessionId);
        if (savedValue != null) {
            savedValue.datas[key] = null;
        }
    }

    async clear() {
        // remove session values
        const index = sessionValues.findIndex(q => q.identifier === this.sessionId);
        if (index >= 0) {
            sessionValues.splice(index, 1);
        }
        // expire cookie in browser
        await this.destroySession();
    }
}