
import { SessionProvider } from "../abstracts/session_provider";
import { SessionValue } from "../types/session_value";


interface ISessionValueFormat {
    identifier: string;
    datas: SessionValue[];
}

const sessionValues: ISessionValueFormat[] = [];

export class MemorySessionProvider extends SessionProvider {

    async get(key: string) {
        const savedSession = sessionValues.find(q => q.identifier === this.sessionId);
        if (savedSession != null) {
            const session = savedSession.datas.find(qry => qry.key === key);
            if (session != null) { return session.value; }
        }
        return null;
    }

    async isExist(key: string) {
        const savedValue = sessionValues.find(q => q.identifier === this.sessionId);
        if (savedValue == null) {
            return false;
        }
        else {
            const index = savedValue.datas.findIndex(qry => qry.key === key);
            return index >= 0;
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
                datas: [{
                    key: key,
                    value: val
                }]
            });
        }
        else {
            const savedSessionData = savedValue.datas.find(q => q.key === key);
            if (savedSessionData == null) {
                savedValue.datas.push({
                    key: key,
                    value: val
                });
            }
            else {
                savedSessionData.value = val;
            }
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
            const index = savedValue.datas.findIndex(q => q.key === key);
            savedValue.datas.splice(index, 1);
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