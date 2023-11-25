import { ISessonStore } from "../interfaces";

const sessionValues: Map<string, { [key: string]: any }> = new Map();

export class MemorySessionStore implements ISessonStore {
    sessionId: string;

    constructor(sessionId: string) {
        this.sessionId = sessionId;
    }

    private getSessionValue_() {
        return sessionValues.get(this.sessionId);
    }

    async isAnyExist() {
        return this.getSessionValue_() != null;
    }

    async get(key: string): Promise<any> {
        const savedValue = this.getSessionValue_();
        return savedValue != null ? savedValue[key] : null
    }

    async getAll(): Promise<{ [key: string]: any; }> {
        const savedValue = this.getSessionValue_();
        return savedValue || {};
    }

    async isExist(key: string): Promise<boolean> {
        const savedValue = this.getSessionValue_()
        return savedValue == null ? false : savedValue[key] != null;
    }

    async clear(): Promise<void> {
        // remove session values
        sessionValues.delete(this.sessionId);
    }

    async set(key: string, val: any) {
        const savedValue = this.getSessionValue_();
        if (savedValue == null) {
            sessionValues.set(this.sessionId, {
                [key]: val
            });
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
        const savedValue = this.getSessionValue_();
        if (savedValue != null) {
            savedValue[key] = null;
        }
    }
}