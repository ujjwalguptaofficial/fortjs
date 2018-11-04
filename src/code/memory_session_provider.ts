import { SessionProvider } from "./abstracts";
import { ISessionValue } from "./interfaces/session_value";
import { promise } from "./helpers/promise";
import { Util } from "./util";

interface ISessionValueFormat {
    identifier: string;
    datas: ISessionValue[]
}

const sessionValues: ISessionValueFormat[] = [];

export class MemorySessionProvider extends SessionProvider {

    get(key: string): Promise<ISessionValue> {
        return promise<null>((resolve, reject) => {
            const savedValue = sessionValues.find(q => q.identifier === this.sessionId);
            if (savedValue == null) {
                resolve(false);
            }
            else {
                const value = savedValue.datas.find(qry => qry.key === key);
                resolve(value);
            }
        });
    }

    isExist(key: string): Promise<boolean> {
        return promise<null>((resolve, reject) => {
            const savedValue = sessionValues.find(q => q.identifier === this.sessionId);
            if (savedValue == null) {
                resolve(false);
            }
            else {
                const index = savedValue.datas.findIndex(qry => qry.key === key);
                resolve(index >= 0);
            }
        });
    }

    getAll(): Promise<ISessionValue[]> {
        return promise<null>((resolve, reject) => {
            const savedValue = sessionValues.find(q => q.identifier === this.sessionId);
            resolve(savedValue == null ? [] : savedValue.datas);
        });
    }

    set(key: string, val: any): Promise<null> {
        return promise<null>((resolve, reject) => {
            this.createSession().then(sessionId => {
                if (sessionId == null) { // session already created
                    const index = sessionValues.findIndex(q => q.identifier === this.sessionId);
                    if (index >= 0) {
                        const savedValue = sessionValues[index];
                        savedValue.datas.push({
                            key: key,
                            value: val
                        })
                    }
                    resolve(null);
                }
                else { // session created
                    this.sessionId = sessionId;
                    sessionValues.push({
                        identifier: this.sessionId,
                        datas: [{
                            key: key,
                            value: val
                        }]
                    })
                }
            });
        });
    }

    setMany(values: ISessionValue[]) {
        return promise<null>((resolve, reject) => {
            const promises: Promise<null>[] = [];
            values.forEach(value => {
                promises.push(this.set(value.key, value.value));
            })
            Promise.all(promises).then(results => {
                resolve();
            }).catch(reject);
        });
    }

    remove(key: string): Promise<null> {
        return promise<null>((resolve, reject) => {
            const savedValue = sessionValues.find(q => q.identifier === this.sessionId);
            if (savedValue != null) {
                const index = savedValue.datas.findIndex(q => q.key === key);
                savedValue.datas.splice(index, 1);
            }
            resolve(null);
        });
    }
}