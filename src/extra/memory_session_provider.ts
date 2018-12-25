
import { SessionProvider } from "../abstracts/session_provider";
import { SessionValue } from "../types/session_value";


interface ISessionValueFormat {
    identifier: string;
    datas: SessionValue[];
}

const sessionValues: ISessionValueFormat[] = [];

export class MemorySessionProvider extends SessionProvider {

    async get(key: string) {
        const savedValue = sessionValues.find(q => q.identifier === this.sessionId);
        if (savedValue != null) {
            const value = savedValue.datas.find(qry => qry.key === key);
            return value;
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
            savedValue.datas.push({
                key: key,
                value: val
            });
        }
    }

    setMany(values: SessionValue[]) {
        return Promise.all(
            values.map(async (value) => {
                return await this.set(value.key, value.value);
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
        const index = sessionValues.findIndex(q => q.identifier === this.sessionId);
        if (index >= 0) {
            sessionValues.splice(index, 1);
        }
        this.destroySession();
    }
}