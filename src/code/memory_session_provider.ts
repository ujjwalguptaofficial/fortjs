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
            //  means session has not been created yet
            if (Util.isNullOrEmpty(this.sessionId)) {
                sessionValues.push({
                    identifier: this.sessionId,
                    datas: [{
                        key: key,
                        value: val
                    }]
                })
                this.onSet().then(resolve).catch(reject);
            }
            else {
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

        });
    }

    setMany(values: ISessionValue[]) {
        return null;
    }

    remove(key: string): Promise<null> {
        return null;
    }

    update(key: string, val: any): Promise<null> {
        return null;
    }

}